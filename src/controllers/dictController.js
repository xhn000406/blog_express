const dictServices = require('../services/dictServices')

class dictController {
  async getData(req, res) {
    let offset = 0
    if (req.query.offset != 'undefined') {
      offset = req.query.offset
      console.log(req.query)
    }

    const result = await dictServices.getData(offset)
    res.send(result)
  }
  async addData(req, res) {
    const { dict_type, dict_name } = req.body
    const result = await dictServices.addData(dict_type, dict_name)
    res.send(result)
  }
  async delData(req, res) {
    const { id } = req.params
    const result = await dictServices.delData(id)
    res.send(result)
  }
  async updateData(req, res) {
    const { id } = req.params
    const { dict_type, dict_name } = req.body
    const result = await dictServices.updateData(dict_type, dict_name, id)
    res.send(result)
  }
}

module.exports = new dictController()
