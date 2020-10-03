const {Router} = require('express')
const router = Router()
const userRouter = require('./routes/userRouter')

router.use(userRouter)
module.exports = router