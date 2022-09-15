const fs = require('fs')
const jwt = require('jsonwebtoken')
const path = require('path')
const publicKey = fs.readFileSync(path.resolve(__dirname, '../key/public.key'))
const privateKey = fs.readFileSync(
  path.resolve(__dirname, '../key/private.key')
)

const { searchUsername } = require('../services/authServices')

class verityAuth {
  async verityAccount(req, res, next) {
    const { username, password, id } = req.body

    const result = await searchUsername(username)
    req.user = result[0]

    if (result[0] == undefined) {
      res.status(401).send({ error: '账号不存在' })
    } else if (username.length < 7 && username != 'admin') {
      res.status(500).send({ error: '账号不能少于六位' })
    } else if (username.length == 0) {
      res.status(401).send({ error: '账号不能为空' })
    } else if (password.length == 0) {
      res.status(401).send({ error: '密码不能为空' })
    }
    await next()
  }

  async createToken(req, res, next) {
    const { id, username } = req.user
    const token = jwt.sign({ id, username }, privateKey, {
      algorithm: 'RS256',
      expiresIn: 60 * 60 * 24
    })
    req.token = token
    await next()
  }

  verityToken(req, res, next) {
    const authorization = req.headers.authorization
    const token = authorization.replace('Bearer ', '')
    const demo = jwt.verify(token, publicKey, {
      algorithms: ['RS256']
    })
    next()
  }
}

module.exports = new verityAuth()
