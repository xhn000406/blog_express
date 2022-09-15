const connection = require('../utils/database/index')

class userServices {
  async getUserInfo(id) {
    const statment =
      'SELECT id,username,avatar,nickname,hotmail,introduction FROM t_user WHERE id = ?'
    const result = await connection.query(statment, [id])
    return result[0]
  }

  async updateUserInfo(nickename, hotMail, avatar, introduction, id) {
    const statement = `UPDATE t_user SET nickname = ?,hotmail = ?,avatar=?,introduction=?  where id = ?`
    const result = await connection.query(statement, [
      nickename,
      hotMail,
      avatar,
      introduction,
      id
    ])
    return result[0]
  }
}

module.exports = new userServices()
