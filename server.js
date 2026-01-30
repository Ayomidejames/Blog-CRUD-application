const express = require('express')
const server = express()
const dotenv = require('dotenv')
const connectDB = require('./mongoDB/dbconnection')
const productRouter = require('./Routers/blogRouter')
dotenv.config()
// require('dotenv).config() - a shorter way of configuring our .env

connectDB()
server.use(express.json())
server.use(express.urlencoded(
    {
        extended: true
    }
))
const port = process.env.PORT || 3000


server.use('/api', productRouter)
server.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})