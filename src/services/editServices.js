const { deleteData } = require('../controllers/editController')
const connection = require('../utils/database/index')

class editServices {
  async addData(title, valueHtml, imgUrl, articleType) {
    console.log(articleType)
    const statement = `INSERT INTO t_edit(title,valueHtml,imgUrl,articleType,send) VALUES (?,?,?,?,0)`
    const result = await connection.query(statement, [
      title,
      valueHtml,
      imgUrl,
      articleType
    ])
    return result[0]
  }
  async getData(id) {
    const statement = `SELECT * FROM t_edit where id = ?`
    const result = await connection.query(statement, [id])
    return result[0]
  }
  async updateData(title, valueHtml, imgUrl, articleType, id) {
    const statement = `UPDATE t_edit SET title =? ,valueHtml =?,imgUrl =?,articleType =?,send =0  where id = ?`
    const result = await connection.query(statement, [
      title,
      valueHtml,
      imgUrl,
      articleType,
      id
    ])
    return result[0]
  }
}

module.exports = new editServices()
