const express = require('express')
const {createUser, getUser, getAllUsers, updateUser, removeUser} = require('./../controllers/user.controller')
const {validateUserOnCreate, validateUserForUpdate} = require('./../middleware/userValidation')

const userRouter = express.Router()

userRouter.post('/user', validateUserOnCreate, createUser)
userRouter.get('/users', getAllUsers)
userRouter.route('/users/:userId')
    .get(getUser)
    .patch(validateUserForUpdate, updateUser)
    .delete( removeUser)


module.exports = userRouter