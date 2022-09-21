const articleServices = require('../services/articleServices')

class artilceController {
  async getdata(req, res) {
    let offset = 0
    let id = req.query.id
    if (req.query.offset != 'undefined') {
      offset = req.query.offset
      console.log(req.query)
    }
    const result = await articleServices.getData(id,offset)
    res.send(result)
  }
}

module.exports = new artilceController()
