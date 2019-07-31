module.exports = (req, res, next) => {
    res.ok = (content) => {
        res.status(200).send(content);
        next();
    }
    res.badRequest = (message) => {
        res.status(400).send(content);
        next();
    }
    res.error = (message, code = 500) => {
        res.status(code).send({ error: message });
        next();
    }
}