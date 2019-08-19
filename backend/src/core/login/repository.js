const db = require('../../config/db')

module.exports = {
    login,
    buscarPorEmail
}

async function login(usuario) {
    return await db.proc('SP_Login', [usuario.email, usuario.senha])
}

async function buscarPorEmail(email) {
    return await db.proc('SP_BuscarUsuarioPorEmail', [email])
}