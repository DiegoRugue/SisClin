const objVal = require('../../service/objVal')
module.exports = result => {
    const i = objVal(result)
    switch (i) {
        case 1:
            return "E-mail ou senha inválidos"
        default:
            break;
    }
}