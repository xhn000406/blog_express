const express = require('express')
const editRouter = express.Router()

const {
  addData,
  getData,
  updateData
} = require('../controllers/editController')
const { verityToken } = require('../middlewares/auth')

//增删改查
editRouter.post('/edit', verityToken, addData)
editRouter.get('/edit/:id', verityToken, getData)
editRouter.post('/edit/:id', verityToken, updateData)

module.exports = editRouter
