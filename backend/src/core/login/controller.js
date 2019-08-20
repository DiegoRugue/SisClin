const router = require('express').Router()
const repository = require('./repository')
const controller = require('../../service/middlewares/controller')
const error = require('./service')
const auth = require('../../service/auth')
const bcrypt = require('bcrypt')

module.exports = router

router.post('/',
    controller( async (req, res, next) => {
        const hashSenha = bcrypt.hashSync(req.body.senha, 10)
        const result = await repository.login({...req.body, senha: hashSenha})

        if (result.success()) {
            const usuario = await repository.buscarPorEmail(req.body.email)
            const token = await auth.generateToken(usuario)

            res.ok({ token, content: usuario })
        } 

        res.badRequest(error(result))
    })
)