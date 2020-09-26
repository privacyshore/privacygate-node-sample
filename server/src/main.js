import './config'

import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import cors from '@koa/cors'
import router from './modules/router'

const app = new Koa()

app.use(cors())
app.use(bodyParser())
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, (err) => {
  if (err) throw err
  console.log('Server ready at http://localhost:3000')
  console.log('Process', process.env.NODE_ENV || 'development')
})