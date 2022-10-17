const homeServices = require('../services/homeServices')

class homeController {
  async getDetailsDeta(req, res) {
    const result = await homeServices.getData()
    res.send(result)
  }
  async getVistedData(req, res) {
    const result = await homeServices.getVistedData()
    res.send(result)
  }
  async addVisitedData(req, res) {
    const result = await homeServices.addVisitedData()
    res.send(result)
  }
}

module.exports = new homeController()
