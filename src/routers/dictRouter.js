const express = require('express')
const dictRouter = express.Router()
const {
  getData,
  addData,
  delData,
  updateData
} = require('../controllers/dictController')
const { verityToken } = require('../middlewares/auth')

//增删改查
dictRouter.post('/dict', verityToken, addData)
dictRouter.delete('/dict/:id', verityToken, delData)
dictRouter.post('/dict/:id', verityToken, updateData)
dictRouter.get('/dict', getData)

// 暂时未做
dictRouter.get('/dict/:id', verityToken)

module.exports = dictRouter
