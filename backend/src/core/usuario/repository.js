const db = require('../../config/db')

exports.get = async () => {
    const { rows } = await db.query('select now()')
    return rows[0];
}

exports.getById = async id => {
    return {
        Deu: `Bom ${id}`
    }
}