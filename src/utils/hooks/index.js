const fs = require('fs')
const homeServices = require('../../services/homeServices')

// 自动导入‘待完善’
const autoRouter = function (url) {
  return fs.readdirSync(url, (err, files) => {
    if (err) return console.log('文件不存在，出现大错误')
    files.forEach((item) => {
      let demo
      demo = item.split('.')[0] = require(`../../src/routers/${item}`)
      app.use(demo)
    })
  })
}

const resultCount = function (arr) {
  let count = 0
  arr.forEach((item) => {
    count++
  })
  return count
}

const setTimeClear = function async() {
  setInterval(async () => {
    await homeServices.clearVisitedData()
  }, 1000 * 60 * 60 * 24 * 7)
}
module.exports = {
  autoRouter,
  resultCount,
  setTimeClear
}
