const authRouter = require('./src/routers/authRouter')
const userRouter = require('./src/routers/userRouter')

const express = require('express')
const bodyParser = require('body-parser')
const { PORT } = require('./src/utils/process/index')
const { expressjwt } = require('express-jwt')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(authRouter)
app.use(userRouter)

app.use(express())

app.listen(PORT, () => {
  console.log(`服务端口已经${PORT}打开`)
})
