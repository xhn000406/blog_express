const express = require('express')
const {
  getdata,
  deleteData,
  sendData,
  getSwiperData
} = require('../controllers/articleController')
const { verityToken } = require('../middlewares/auth')
const articleRouter = express.Router()

articleRouter.get('/article', getdata)
articleRouter.delete('/article/:id', verityToken, deleteData)
articleRouter.post('/article/:id', verityToken, sendData)
articleRouter.get('/swiper', getSwiperData)

module.exports = articleRouter
