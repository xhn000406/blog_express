const express = require('express')
const { getData,deleteData } = require('../controllers/recordController')
const { verityToken } = require('../middlewares/auth')
const recordRouter = express.Router()

recordRouter.get('/record', verityToken, getData)
recordRouter.delete('/record/:id',verityToken,deleteData)

module.exports = recordRouter
