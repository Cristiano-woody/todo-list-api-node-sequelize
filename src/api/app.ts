import express from 'express'
// importando rotas
import userRoutes from './routes/userRoutes'
// importando .env
import * as dotenv from 'dotenv'
// importando cors
import cors from 'cors'

dotenv.config()

// iniciando o app
const app = express()

// usando cors
app.use(cors())

//
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// usando rotas
app.use(userRoutes)

export default app
