import express from 'express'
import { join } from 'node:path'

import fruitRoutes from './routes/fruits'
import booksRoutes from './routes/books'

const server = express()

server.use(express.json())
server.use(express.static(join(__dirname, 'public')))

server.use('/api/v1/fruits', fruitRoutes)
server.use('/api/v1/books', booksRoutes)

export default server
