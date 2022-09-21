const express = require('express')
const { getdata } = require('../controllers/articleController')
const { verityToken } = require('../middlewares/auth')
const articleRouter = express.Router()

articleRouter.get('/article', verityToken, getdata)

module.exports = articleRouter
