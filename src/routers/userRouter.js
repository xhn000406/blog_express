const express = require('express')
const { getUserInfo, updateUserInfo } = require('../controllers/userController')
const { verityToken } = require('../middlewares/auth')
const userRouter = express.Router()

// 用户自己信息
userRouter.get('/userInfo/:id', verityToken, getUserInfo)
userRouter.post('/userInfo/:id', verityToken, updateUserInfo)

//用户管理

module.exports = userRouter
