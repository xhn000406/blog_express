const userServices = require('../services/userServices')

class userController {
  async getUserInfo(req, res) {
    const { id } = req.params
    const result = await userServices.getUserInfo(id)
    res.send({
      result
    })
  }

  async updateUserInfo(req, res) {
    const { id } = req.params
    const { nicekName } = req.body
    const result = await userServices.updateUserInfo(nicekName, id)
    res.send({
      result
    })
  }
}

module.exports = new userController()
