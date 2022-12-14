const bodyParser = require('body-parser')
const { setTimeClear } = require('./src/utils/hooks')

const { PORT } = require('./src/utils/process/index')
const authRouter = require('./src/routers/authRouter')
const userRouter = require('./src/routers/userRouter')
const uploadRouter = require('./src/routers/uploadRouter')
const editRouter = require('./src/routers/editRouter')
const dictRouter = require('./src/routers/dictRouter')
const articleRouter = require('./src/routers/articleRouter')
const recordRouter = require('./src/routers/recordRouter')
const homeRouter = require('./src/routers/homeRouter')

const express = require('express')
const app = express()

app.use(express.static('uploads'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(authRouter)
app.use(userRouter)
app.use(articleRouter)
app.use(uploadRouter)
app.use(dictRouter)
app.use(editRouter)
app.use(recordRouter)
app.use(homeRouter)
app.use(express())

setTimeClear()

app.listen(PORT, () => {
  console.log(`服务端口已经${PORT}打开`)
})
