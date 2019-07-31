module.exports = (controller) => {
    return async (req, res, next) => {
        try {
            await controller(req, res, next);
        } catch (error) {
            res.status(400).send({ Error: error })
        }
    }
}