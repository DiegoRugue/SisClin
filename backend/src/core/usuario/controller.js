const router = require('express').Router()
const repository = require('./repository')
const controller = require('../../service/middlewares/controller')
const error = require('./service')
const objVal = require('../../service/objVal')

router.get('/',
    controller(async (req, res, next) => {
        const result = await repository.listarUsuarios()
        res.ok(result)
    })
)

router.get('/:id',
    controller(async (req, res, next) => {
        const result = await repository.buscarUsuario(req.params.id)
        res.ok(result)
    })
)

router.post('/',
    controller(async (req, res, next) => {
        const result = await repository.cadastrarUsuario(req.body)
        if (objVal(result) == 0) res.ok()

        res.badRequest(error(result))
    })
)

router.put('/',
    controller(async (req, res, next) => {
        const result = await repository.atualizarUsuario(req.body)
        if (objVal(result) == 0) res.ok()

        res.badRequest(error(result))
    })
)

router.delete('/:id',
    controller(async (req, res, next) => {
        const result = await repository.excluirUsuario(req.params.id)
        if (objVal(result) == 0) res.ok()

        res.badRequest(result)
    })
)

module.exports = router
