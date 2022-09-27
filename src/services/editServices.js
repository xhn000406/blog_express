const { deleteData } = require('../controllers/editController')
const connection = require('../utils/database/index')

class editServices {
  async addData(title, valueHtml, imgUrl, articleType) {
    const statement = `INSERT INTO t_edit(title,valueHtml,imgUrl,articleType,send,isSwaper) VALUES (?,?,?,?,0)`
    const result = await connection.query(statement, [
      title,
      valueHtml,
      imgUrl,
      articleType,
      isSwaper
    ])
    return result[0]
  }
  async getData(id) {
    const statement = `SELECT * FROM t_edit where id = ?`
    const result = await connection.query(statement, [id])
    return result[0]
  }
  async updateData(title, valueHtml, imgUrl, articleType, isSwaper, id) {
    const statement = `UPDATE t_edit SET title =? ,valueHtml =?,imgUrl =?,articleType =?,send =0,isSwaper=? where id = ?`
    const result = await connection.query(statement, [
      title,
      valueHtml,
      imgUrl,
      articleType,
      isSwaper,
      id
    ])
    return result[0]
  }
}

module.exports = new editServices()
