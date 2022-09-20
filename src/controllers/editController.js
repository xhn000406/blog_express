const editServices = require('../services/editServices')

class editController {
  async addData(req, res) {
    const { title, valueHtml, imgUrl } = req.body
    const result = await editServices.addData(title, valueHtml, imgUrl)
    res.send(result)
  }
  async getData(req, res) {
    const { id } = req.params
    const result = await editServices.getData(id)
    res.send(result)
  }
}

module.exports = new editController()
