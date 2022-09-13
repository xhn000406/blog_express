const bodyParser = require('body-parser')
const { PORT } = require('./src/utils/process/index')
const authRouter = require('./src/routers/authRouter')
const userRouter = require('./src/routers/userRouter')
const uploadRouter = require('./src/routers/uploadRouter')

const express = require('express')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(authRouter)
app.use(userRouter)
app.use(uploadRouter)

app.use(express())

app.listen(PORT, () => {
  console.log(`服务端口已经${PORT}打开`)
})
