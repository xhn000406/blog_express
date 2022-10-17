const express = require('express')
const { verityToken } = require('../middlewares/auth')
const {
  getDetailsDeta,
  getVistedData,
  addVisitedData
} = require('../controllers/homeController')
const homeRouter = express.Router()

homeRouter.get('/getDetailsInfo', getDetailsDeta)
homeRouter.get('/getVisitedData', getVistedData)
homeRouter.post('/addVisitedData', addVisitedData)

module.exports = homeRouter
