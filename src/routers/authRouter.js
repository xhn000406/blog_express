const express = require('express')
const authRouter = express.Router()

const { registerAuth, loginAuth } = require('../controllers/authController')
const { verityAccount, createToken } = require('../middlewares/auth')

authRouter.post('/register', verityAccount, registerAuth)
authRouter.post('/login', verityAccount, createToken, loginAuth)

module.exports = authRouter
