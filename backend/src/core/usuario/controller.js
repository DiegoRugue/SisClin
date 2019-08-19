const router = require('express').Router()
const repository = require('./repository')
const controller = require('../../service/middlewares/controller')
const error = require('./service')
const auth = require('../../service/auth')


module.exports = router


router.get('/', auth.authozire,
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
        if (result.success()) res.ok()

        res.badRequest(error(result))
    })
)

router.put('/',
    controller(async (req, res, next) => {
        const result = await repository.atualizarUsuario(req.body)
        if (result.success()) res.ok()

        res.badRequest(error(result))
    })
)

router.delete('/:id',
    controller(async (req, res, next) => {
        const result = await repository.excluirUsuario(req.params.id)
        if (result.success()) res.ok()

        res.badRequest(result)
    })
)

