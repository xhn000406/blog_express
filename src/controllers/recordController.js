const recordServices = require('../services/recordServices')
const { resultCount } = require('../utils/hooks')

class recordController {
  async getData(req, res) {
    const { page } = req.query
    const result = await recordServices.getData(page)
    const count = resultCount(result)
    res.send({
      result,
      count
    })
  }
  async deleteData(req, res) {
    const { id } = req.params
    const result = await recordServices.deleteData(id)
    res.send(result)
  }
  async addData(req, res) {
    const { recordText, recordName, recordHotmail } = req.body
    const result = await recordServices.addData(
      recordText,
      recordName,
      recordHotmail
    )
    res.send('发送成功')
  }
}

module.exports = new recordController()
