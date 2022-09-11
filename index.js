const authRouter = require('./src/routers/authRouter')

const express = require('express'),
  { PORT } = require('./src/utils/process/index'),
app = express()

app.use(authRouter)


app.listen(PORT, () => {
  console.log(`服务端口已经${PORT}打开`)
})
