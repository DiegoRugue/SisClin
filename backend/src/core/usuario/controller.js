const router = require('express').Router()
const repository = require('./repository')
const controller = require('../../service/middlewares/controller')
const { error } = require('./service')

router.get('/', 
    controller( async (req, res, next) => {
        const result = await repository.listarUsuarios()
        res.status(200).send(result)
    })
)

router.get('/:id',
    controller( async (req, res, next) => {
        const result = await repository.buscarUsuario(req.params.id)
        res.status(200).send(result)
    })
)

router.post('/',
    controller( async (req, res, next) => {
        const result = await repository.cadastrarUsuario(req.body)
        if (result == 0) res.status(201).send() 
        
        res.status(400).send(error(result))
    })
)

router.put('/',
    controller( async (req, res, next) => {
        const result = await repository.atualizarUsuario(req.body)
        if (result == 0) res.status(201).send() 
        
        res.status(400).send(error(result))
    })
)

router.delete('/:id',
    controller( async (req, res, next) => {
        const result = await repository.excluirUsuario(req.params.id)
        if (result == 0) res.status(200).send()

        res.status(400).send()
    })
)

module.exports = router
