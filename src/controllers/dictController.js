const dictServices = require('../services/dictServices')

class dictController {
  async getData(req, res) {
    const result = await dictServices.getData()
    res.send(result)
  }
  async addData(req, res) {
    const { type, name } = req.body
    const result = await dictServices.addData(type, name)
    res.send(result)
  }
  async delData(req, res) {
    const { id } = req.params
    const result = await dictServices.delData(id)
    res.send(result)
  }
  async updateData(req, res) {
    const { id } = req.params
    const { type, name } = req.body
    const result = await dictServices.updateData(type, name, id)
    res.send(result)
  }
}

module.exports = new dictController()
