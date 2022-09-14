const connection = require('../utils/database/index')

class userServices {
  async getUserInfo(id) {
    const statment =
      'SELECT id,username,avatar,nickname FROM t_user WHERE id = ?'
    const result = await connection.query(statment, [id])
    return result[0]
  }

  async upDataUserAvatar(url, id) {
    const statment = 'UPDATE t_user SET avatar  = ?   WHERE id = ?'
    const result = await connection.query(statment, [url, id])
    return result[0]
  }

  async updateUserInfo(nickename, id) {
    const statement = `UPDATE t_user SET nickname = ? where id = ?`
    const result = await connection.query(statement, [nickename, id])
    return result[0]
  }
}

module.exports = new userServices()
