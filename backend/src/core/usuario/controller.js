const router = require('express').Router()
const repository = require('./repository')
const controller = require('../../service/middlewares/controller')

router.get('/', 
    controller( async (req, res, next) => {
        const data = await repository.get()
        res.status(200).send(data)
    })
)

router.get('/:id',
    controller( async (req, res, next) => {
        const data = await repository.getById(req.params.id)
        res.status(200).send(data)
    })
)

module.exports = router
