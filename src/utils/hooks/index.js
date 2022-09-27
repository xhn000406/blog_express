const fs = require('fs')

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

module.exports = {
  autoRouter,
  resultCount
}
