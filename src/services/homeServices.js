const connection = require('../utils/database/index')

class homeServices {
  async getData(req, res) {
    let obj = {}

    const detailCount = await connection.query(
      'select count(*) as detailCount  from t_details'
    )

    const recordCount = await connection.query(
      `select count(*) as recordCount from t_record`
    )
    const editCount = await connection.query(
      'select count(*) as editCount  from t_edit'
    )

    const dictCount = await connection.query(`
    select count(*) as dictCount  from t_dict
    `)

    const userCount = await connection.query(
      'select count(*) as userCount  from t_user'
    )
    obj = Object.assign(
      {},
      recordCount[0][0],
      editCount[0][0],
      detailCount[0][0],
      dictCount[0][0],
      userCount[0][0]
    )
    let arr = []

    for (let i in obj) {
      arr.push({
        name: i,
        value: obj[i]
      })
    }

    // obj = {
    //   result: {
    //     recordCount: recordCount[0][0],
    //     editCount: editCount[0][0],
    //     detailCount: detailCount[0][0],
    //     dictCount: dictCount[0][0],
    //     userCount: userCount[0][0]
    //   }
    // }
    return arr
  }
  async getVistedData() {
    const result = await connection.query(`SELECT * FROM t_visited`)
    const resultCount = result[0][0]
    let arr = new Array()
    for (let i in resultCount) {
      arr.push(resultCount[i])
    }
    arr.shift()
    console.log(arr)
    return arr
  }

  async addVisitedData() {
    const date = new Date()
    const day = date.getDay()
    let nowDay = ''
    console.log(typeof day)
    switch (day) {
      case 1:
        nowDay = 'Mon'
        break
      case 2:
        nowDay = 'Tue'
        break
      case 3:
        nowDay = 'Wed'
        break
      case 4:
        nowDay = 'Thu'
        break
      case 5:
        nowDay = 'Fri'
        break
      case 6:
        nowDay = 'Sat'
        break
      case 7:
        nowDay = 'Sun'
        break
      default:
        break
    }
    const result = await connection.query(
      `update t_visited set ${nowDay} = ${nowDay} + 1 where id = 1 `
    )
    return result[0]
  }

  async clearVisitedData() {
    await connection.query(
      `update t_visited set Mon =0,
      Tue = 0,
      Wed = 0,
      Thu = 0,
      Fri = 0,
      Sat = 0,
      Sun  = 0 where id = 1 `
    )
  }
}

module.exports = new homeServices()
