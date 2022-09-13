const express = require('express')
const multer = require('multer')

const uploadRouter = express.Router()

const storage = multer.diskStorage({
  //保存路径
  destination: function (req, file, cb) {
    cb(null, './uploads')
    //注意这里的文件路径,不是相对路径，直接填写从项目根路径开始写就行了
  },
  //保存在 destination 中的文件名
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})
const upload = multer({ storage: storage })
uploadRouter.post('/profile', upload.single('avatar'), (req, res, next) => {
  console.log(req)
})

module.exports = uploadRouter
