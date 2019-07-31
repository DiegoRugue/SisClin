const repository = require('../repositories/users')

exports.get = async (req, res) => {
    try {
        const data = await repository.get()
        res.status(200).send({ menssage: data })
    } catch (e) {
        res.status(400).send({ Error: e })
    }
    
}