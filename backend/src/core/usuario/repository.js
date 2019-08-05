const db = require('../../config/db')

module.exports = {
    listarUsuarios,
    buscarUsuario,
    cadastrarUsuario,
    atualizarUsuario,
    excluirUsuario
}

async function listarUsuarios() {
    const { rows } = await db.select('SP_ListarUsuarios')

    return rows[0]
}

async function buscarUsuario(id) {
    const { rows } = await db.select('SP_BuscarUsuario', [id])

    return rows[0]
}

async function cadastrarUsuario(usuario) {
    //const { rows } = await db.exec('SP_CadastrarUsuario', [usuario.nome, usuario.email, usuario.senha])
    const { rows } = await db.query('SELECT SP_CadastrarUsuario($1 $2 $3)', ['Diego', 'teste', '1234'])
 
    return rows[0]
}

async function atualizarUsuario(usuario) {
    return usuario
}

async function excluirUsuario(id) {
    return 0
}