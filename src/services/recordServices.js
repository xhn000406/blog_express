const connection = require('../utils/database/index')

class recordServices {
  async getData() {
    const statement = 'SELECT * FROM t_record'
    const result = await connection.query(statement)
    return result[0]
  }
  async addData() {
    const statement =
      'UPDATE t_record SET recordTex = ?,recordName = ?,recordHotmail = ?'
    const result = await connection.query(statement, [
      recordText,
      recordName,
      recordHotmail
    ])
    return result
  }
}

module.exports = new recordServices()
