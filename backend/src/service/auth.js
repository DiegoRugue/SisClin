const jwt = require('jsonwebtoken')

module.exports = {
    generateToken,
    decodeToken,
    authozire
}

async function generateToken(data) {
    return await jwt.sign(data, global.SALT_KEY, { expiresIn: '1d' })
}

async function decodeToken(token) {
    const data = await jwt.verify(token, global.SALT_KEY)
    return data
}

async function authozire (req, res, next) {
    const token = req.body.token || req.query.token || req.headers['x-access-token']

    if (!token) {
        res.status(401).json({
            message: 'Acesso Restrito'
        })
    } else {
        jwt.verify(token, global.SALT_KEY, (error, decoded) => {
            if (error) {
                res.status(401).json({
                    message: 'Token invalido'
                })
            } else {
                next()
            }
        })
    }
}