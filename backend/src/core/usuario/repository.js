const db = require('../../config/db')

module.exports = {
    listarUsuarios,
    buscarUsuario,
    cadastrarUsuario,
    atualizarUsuario,
    excluirUsuario
}

async function listarUsuarios() {
    return await db.func('SP_ListarUsuarios', [])
}

async function buscarUsuario(id) {
    return await db.proc('SP_BuscarUsuario', [id])
}

async function cadastrarUsuario(usuario) {
    return await db.proc('SP_CadastrarUsuario', [usuario.nome, usuario.email, usuario.senha])
}

async function atualizarUsuario(usuario) {
    return await db.proc('SP_AtualizarUsuario', [usuario.nome, usuario.email, usuario.senha])
}

async function excluirUsuario(id) {
    return await db.proc('SP_ExcluirUsuario', [id])
}