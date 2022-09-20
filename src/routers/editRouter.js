const express = require('express')
const editRouter = express.Router()

const { addData, getData } = require('../controllers/editController')
const { verityToken } = require('../middlewares/auth')

//增删改查
editRouter.post('/edit', verityToken, addData)
editRouter.get('/edit/:id', verityToken, getData)

module.exports = editRouter
