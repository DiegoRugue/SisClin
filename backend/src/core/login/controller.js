const router = require('express').Router()
const repository = require('./repository')
const controller = require('../../service/middlewares/controller')
const error = require('./service')
const objVal = require('../../service/objVal')
const auth = require('../../service/auth')

module.exports = router

router.post('/',
    controller( async (req, res, next) => {
        const result = await repository.login(req.body)
        if (objVal(result) == 0) {
            const usuario = await repository.buscarPorEmail(req.body.email)
            const token = await auth.generateToken(usuario)
            res.ok({ token, content: usuario })
        } 

        res.badRequest(error(result))
    })
)