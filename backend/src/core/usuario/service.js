module.exports = {
    error
}

async function error(result) {
    switch (result) {
        case 1:
            return "E-mail já cadastrado"
        default:
            break;
    }
}