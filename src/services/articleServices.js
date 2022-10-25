const connection = require('../utils/database/index')
const { resultCount } = require('../utils/hooks')

class articleServices {
  async getData(id, page) {
    if (page == 'undefined') {
      page = 0
    }
    const iid = parseInt(id)
    const statment = `SELECT * FROM t_edit WHERE articleType = ? LIMIT 10 OFFSET ?`
    const count = await connection.query('SELECT * FROM t_edit')
    const reCount = resultCount(count[0])
    const result = await connection.query(statment, [iid, parseInt(page)])
    return [result[0], reCount]
  }

  async deleteData(id) {
    const statement = 'DELETE from t_edit where id = ?'
    const result = await connection.query(statement, [id])
    return result[0]
  }

  async issueData(send, id) {
    console.log(send)
    const statement =
      'UPDATE t_edit SET send = ?,author="小徐同学" WHERE id = ?'
    const result = await connection.query(statement, [send, id])
    return result[0]
  }

  async getSwiperData() {
    const statement = 'SELECT * FROM t_edit where isSwaper = 1'
    const result = await connection.query(statement)
    return result[0]
  }
}

module.exports = new articleServices()
