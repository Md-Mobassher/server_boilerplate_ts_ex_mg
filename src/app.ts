import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { userRoutes } from './routes/user.routes'

const app: Application = express()

app.use(express.json())
app.use(cors())

app.use('/api/v1/users', userRoutes)

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'success',
    message: 'Welcome to new server',
  })
})

export default app
