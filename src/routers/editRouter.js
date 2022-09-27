const express = require('express')
const editRouter = express.Router()

const {
  addData,
  getData,
  updateData
} = require('../controllers/editController')
const { verityToken } = require('../middlewares/auth')

//增删改查
editRouter.post('/edit', addData)
editRouter.get('/edit/:id', getData)
editRouter.post('/edit/:id', verityToken, updateData)

module.exports = editRouter
