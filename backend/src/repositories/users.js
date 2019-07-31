const db = require('../config/db')

exports.get = async () => {
    const { rows } = await db.query('select Nome from Usuario where Id = $1', [1])
    return rows[0];
}