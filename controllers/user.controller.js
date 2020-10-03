const {User} = require('./../models')

module.exports.createUser = async (req, res, next) => {
    const {body} = req

    try {
        const createdUser = await User.create(body)
        res.status(201).send(createdUser)
    } catch (e) {
        next(e)
    }
}

module.exports.getAllUsers = async (req, res, next) => {
    const users = await User.findAll()
    res.send(users)
}

module.exports.getUser = async (req, res, next) => {
    const {params: {userId}} = req

    try {
        const user = await User.findOne({
            where: {id: userId}
        })

        if (user) {
            return res.send(user)
        }
        res.status(404).send({
            message: `User with id ${userId} not found`
        })
    } catch (e) {
        next(e)
    }
}


module.exports.updateUser = async (req, res, next) => {
    const {params: {userId}, body} = req

    try {
        const user = await User.findOne({
            where: {id: userId}
        })

        if (user) {
            const updatedUser = await user.update(body)
            res.status(200).send(updatedUser)
        }
        res.status(404).send({
            message: `User with id ${userId} not found`
        })
    } catch (e) {
        next(e)
    }


}

module.exports.removeUser = async (req, res) => {
    try {
        const {params: {userId}} = req

        const deleted = await User.destroy({
            where: {id: userId}
        })

        if (deleted) {
            return res.status(204).send(`user deleted`)
        }
        res.status(404).send({
            message: `User with id ${userId} not found`
        })
    } catch (e) {

    }
}