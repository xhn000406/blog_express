const express = require('express')
const {
  getdata,
  deleteData,
  sendData
} = require('../controllers/articleController')
const { verityToken } = require('../middlewares/auth')
const articleRouter = express.Router()

articleRouter.get('/article', verityToken, getdata)
articleRouter.delete('/article/:id', verityToken, deleteData)
articleRouter.post('/ariicle/:id', verityToken, sendData)

module.exports = articleRouter
