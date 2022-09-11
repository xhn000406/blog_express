const express = require('express')
const authRouter = express.Router();

const {auth} = require('../controllers/authController')


authRouter.get('/auth',auth)











module.exports = authRouter
