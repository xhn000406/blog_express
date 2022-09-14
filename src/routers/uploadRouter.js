const express = require('express')
const multer = require('multer')
const { URL } = require('../utils/process')
const userServices = require('../services/userServices')

const uploadRouter = express.Router()

const storage = multer.diskStorage({
  //保存路径
  destination: function (req, file, cb) {
    cb(null, './uploads')
    //注意这里的文件路径,不是相对路径，直接填写从项目根路径开始写就行了
  },
  //保存在 destination 中的文件名
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + '.jpg')
  }
})
const upload = multer({ storage: storage })
uploadRouter.post('/profile', upload.single('avatar'), (req, res, next) => {
  console.log(req.file)
})

uploadRouter.post(
  '/userAvatar/:id',
  upload.single('avatar'),
  async (req, res, next) => {
    console.log(req.params)
    const id = req.params.id
    let fileName = URL + req.file.filename
    const result = await userServices.upDataUserAvatar(fileName, id)
    res.send(result)
  }
)

module.exports = uploadRouter
