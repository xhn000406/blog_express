const connection = require('../utils/database/index')

class editServices {
  async addData(title, valueHtml, imgUrl) {
    const statement = `INSERT INTO t_edit(title,valueHtml,imgUrl) VALUES (?,?,?)`
    const result = await connection.query(statement, [title, valueHtml, imgUrl])
    return result[0]
  }
  async getData(id) {
    const statement = `SELECT * FROM t_edit where id = ?`
    const result = await connection.query(statement, [id])
    return result[0]
  }
}

module.exports = new editServices()
