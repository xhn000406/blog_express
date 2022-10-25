const homeServices = require('../services/homeServices')
const userServices = require('../services/userServices')

class userController {
  async getUserInfo(req, res) {
    const { id } = req.params
    const result = await userServices.getUserInfo(id)
    homeServices.addVisitedData()
    res.send({
      result
    })
  }

  async updateUserInfo(req, res) {
    const { id } = req.params
    const { nickName, hotMail, fileName, introduction } = req.body
    const result = await userServices.updateUserInfo(
      nickName,
      hotMail,
      fileName,
      introduction,
      id
    )
    res.send({
      result
    })
  }
}

module.exports = new userController()
