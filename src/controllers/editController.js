const editServices = require('../services/editServices')

class editController {
  async addData(req, res) {
    const { title, valueHtml, imgUrl, articleType, isSwaper, isSend } = req.body
    const result = await editServices.addData(
      title,
      valueHtml,
      imgUrl,
      articleType,
      isSend,
      isSwaper
    )
    res.send(result)
  }
  async getData(req, res) {
    const { id } = req.params
    const result = await editServices.getData(id)
    await editServices.addViewNum(id)
    res.send(result)
  }
  async updateData(req, res) {
    const { id } = req.params
    const { title, valueHtml, imgUrl, articleType, isSwaper, isSend } = req.body
    const result = await editServices.updateData(
      title,
      valueHtml,
      imgUrl,
      articleType,
      isSwaper,
      isSend,
      id
    )
    res.send(result)
  }
}

module.exports = new editController()
