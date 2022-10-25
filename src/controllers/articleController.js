const articleServices = require('../services/articleServices')
const { resultCount } = require('../utils/hooks')

class artilceController {
  async getdata(req, res) {
    const { page, id } = req.query
    const [result, count] = await articleServices.getData(id, page)
    console.log(result)
    res.send({
      result,
      count
    })
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
