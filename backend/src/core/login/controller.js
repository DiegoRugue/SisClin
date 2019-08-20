const router = require('express').Router()
const repository = require('./repository')
const controller = require('../../service/middlewares/controller')
const error = require('./service')
const auth = require('../../service/auth')
const bcrypt = require('bcrypt')

module.exports = router

router.post('/',
    controller(async (req, res, next) => {
        const usuario = await repository.buscarPorEmail(req.body.email)

        if (!usuario || !bcrypt.compareSync(req.body.senha, usuario.Senha))
            res.badRequest('Email ou senha inválidos')

        delete usuario.Senha
        
        const token = await auth.generateToken(usuario)
        res.ok({ token, content: usuario })

    })
)