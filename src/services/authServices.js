const connection = require('../utils/database/index')

class authServices {
  async register(username, password) {
    const statement = `INSERT INTO t_user(username,password) VALUES(?,?) `
    const result = await connection.query(statement, [username, password])
    return result[0]
  }

  async searchUsername(username) {
    const statement = `SELECT * FROM t_user WHERE username = ?  `
    const result = await connection.query(statement, [username])
    return result[0]
  }

  async login(username, password) {
    const statement = 'SELECT * FROM t_user WHERE username = ? AND password = ?'
    const result = await connection.query(statement, [username, password])
    return result[0]
  }
}

module.exports = new authServices()
