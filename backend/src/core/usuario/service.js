module.exports = result => {
    const i = result.val()
    switch (i) {
        case 1:
            return "E-mail já cadastrado"
        default:
            break
    }
}