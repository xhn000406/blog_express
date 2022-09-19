const connection = require('../utils/database/index')

class dictServices {
  async getData(offset) {
    const reoffset = parseInt(offset)
    const statment = `SELECT * FROM t_dict LIMIT 10 OFFSET ?`
    const result = await connection.query(statment, [reoffset])
    return result[0]
  }

  async addData(type, name) {
    const statment = 'INSERT INTO t_dict(dict_type,dict_name) VALUES (?,?)'
    const result = await connection.query(statment, [type, name])
    return result[0]
  }
  async delData(id) {
    const statment = 'DELETE FROM t_dict where id = ?'
    const result = await connection.query(statment, [id])
    return result[0]
  }
  async updateData(type, name, id) {
    const statment =
      'UPDATE t_dict SET dict_type = ?,dict_name = ?  where id = ?'
    const result = await connection.query(statment, [type, name, id])
    return result[0]
  }
}

module.exports = new dictServices()
