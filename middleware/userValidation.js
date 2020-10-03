const yup = require('yup')
const {USER_CREATE_SCHEMA, USER_UPDATE_SCHEMA} = require('./../utils/validation')

module.exports.validateUserOnCreate = async (req, res, next) => {
    const {body} = req

    try {
        req.body = await USER_CREATE_SCHEMA.validate(body)
        next()
    } catch (e) {
        res.status(400).send({
            message: e.message
        })
    }
}

module.exports.validateUserForUpdate = async (req, res, next) => {
    const {body} = req

    try {
        req.body = await USER_UPDATE_SCHEMA.validate(body)
        next()
    } catch (e) {
        res.status(400).send({
            message: e.message
        })
    }
}