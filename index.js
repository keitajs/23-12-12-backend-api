import express from 'express'
import cors from 'cors'
import router from './routes/router.js'
import { config } from 'dotenv'
config()

const app = express()
const port = process.env.PORT

app.use(cors({ credentials: true, origin: `http://localhost:${port}` }))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(router)

app.listen(port, (err) => {
  if (err) throw console.log(err)
  console.log('Server started...')
})