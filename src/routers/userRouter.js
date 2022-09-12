const express = require('express')
const { verityToken } = require('../middlewares/auth')
const userRouter = express.Router()

userRouter.post('/userInfo', verityToken, (req, res, next) => {
  res.send('asdas')
})

module.exports = userRouter
