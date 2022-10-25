const connection = require('../utils/database/index')
const { resultCount } = require('../utils/hooks')

class recordServices {
  async getData(page) {
    if (page == 'undefined') {
      page = 0
      console.log(typeof page)
    }

    const statement = 'SELECT * FROM t_record LIMIT 10 OFFSET ? '
    const result = await connection.query(statement, [parseInt(page)])

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
