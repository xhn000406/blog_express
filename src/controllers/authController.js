const { register } = require('../services/authServices')
const { md5Password } = require('../utils/password-handle')

class authController {
  registerAuth = async (req, res) => {
    const { username, password } = req.body
    const result = await register(username, md5Password(password))
    res.send({
      data: result,
      status: 200
    })
  }

  loginAuth = async (req, res) => {
    const { username, id } = req.user
    const token = req.token
    res.send({
      id,
      username,
      token
    })
  }
}

module.exports = new authController()
