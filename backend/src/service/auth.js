const jwt = require('jsonwebtoken')

module.exports = {
    generateToken,
    decodeToken,
    authozire
}

async function generateToken(data) {
    return await jwt.sign(data, { expiresIn: '1d' })
}

async function decodeToken(token) {
    return await jwt.verify(token)
}

async function authozire (req, res, next) {
    const token = req.body.token || req.query.token || req.headers['x-access-token']

    if (!token) res.error('Acesso Restrito', 401)

    jwt.verify(token, global.SALT_KEY, (error, decoded) => {
        if (error) res.error('Token inválido', 401)
        
        next()
    })
        
}
