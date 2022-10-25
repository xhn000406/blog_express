const { deleteData } = require('../controllers/editController')
const connection = require('../utils/database/index')

class editServices {
  async addData(title, valueHtml, imgUrl, articleType, isSend, isSwaper) {
    const statement = `INSERT INTO t_edit(title,valueHtml,imgUrl,articleType,isSend,isSwaper) VALUES (?,?,?,?,?,?)`
    const result = await connection.query(statement, [
      title,
      valueHtml,
      imgUrl,
      articleType,
      isSend,
      isSwaper
    ])
    return result[0]
  }
  async getData(id) {
    const statement = `SELECT * FROM t_edit where id = ?`
    const result = await connection.query(statement, [id])
    return result[0]
  }
  async addViewNum(id) {
    const statement = 'UPDATE t_edit SET viewNum = viewNum+1  where id = ?'
    await connection.query(statement, [id])
  }
  async updateData(
    title,
    valueHtml,
    imgUrl,
    articleType,
    isSwaper,
    isSend,
    id
  ) {
    const statement = `UPDATE t_edit SET title =? ,valueHtml =?,imgUrl =?,articleType =?,isSwaper=?,isSend =? where id = ?`
    const result = await connection.query(statement, [
      title,
      valueHtml,
      imgUrl,
      articleType,
      isSwaper,
      isSend,
      id
    ])
    return result[0]
  }
}

module.exports = new editServices()
