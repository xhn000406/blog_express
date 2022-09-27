const articleServices = require('../services/articleServices')

class artilceController {
  async getdata(req, res) {
    let offset = 0
    let id = req.query.id
    if (req.query.offset == 'undefined') {
      offset = req.query.offset
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
    let send = 1
    const result = await articleServices.issueData(send, id)
    res.send(result)
  }
  async getSwiperData(req, res) {
    const result = await articleServices.getSwiperData()
    res.send(result)
  }
}

module.exports = new artilceController()
