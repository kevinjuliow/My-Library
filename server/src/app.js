require('dotenv').config()
const express = require ('express')
const logRequest = require ('./middleware/log')
const booksRouter = require('./books/books')
const PORT = process.env.PORT
const cors = require('cors')
const app = express()

app.use(cors({
  origin : `http://localhost:3000`
}))

app.use(logRequest)
app.use(express.json())


app.use('/books' , booksRouter)

app.listen(PORT , ()=>{ 
  console.log(`server is running on port:${PORT}`)
})