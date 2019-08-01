const db = require('../../config/db')

module.exports = {
    listarUsuarios,
    buscarUsuario,
    cadastrarUsuario,
    atualizarUsuario,
    excluirUsuario
}

async function listarUsuarios() {
    const { rows } = await db.query('select now()')

    
    return rows[0]
}

async function buscarUsuario(id) {
    return {
        Deu: `Bom ${id}`
    }
}

async function cadastrarUsuario(usuario) {
    return usuario
 
}

async function atualizarUsuario(usuario) {
    return usuario
}

async function excluirUsuario(id) {
    return 0
}