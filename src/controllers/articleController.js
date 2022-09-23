const articleServices = require('../services/articleServices')

class artilceController {
  async getdata(req, res) {
    let offset = 0
    let id = req.query.id
    if (req.query.offset != 'undefined') {
      offset = req.query.offset
      console.log(req.query)
    }
    const result = await articleServices.getData(id, offset)
    res.send(result)
  }

  async deleteData(req, res) {
    const { id } = req.params
    const result = await articleServices.deleteData(id)
    res.send(result)
  }

  async sendData(req, res) {
    const { id } = req.params
    const { send } = req.body
    const result = await articleServices.issueData(id, send)
    res.send(result)
  }
}

module.exports = new artilceController()
