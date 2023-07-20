const bookModels = require ('../models/books')

const GETFunction = async (req, res ) => {
  try {
    const [data] = await bookModels.getAllBooks()
    res.json({
      message: 'Success GET From Database' , 
      data : data
    })
  } catch (error) {
    res.status(500).json({
      message  : 'Error Connecting to Database' , 
      errorMessage : error
    })
  } 
}

const POSTFunction = async (req, res) => {
  const {body} = req 
  try {
    await bookModels.createNewBooks(body)
    res.json({
      message : 'Create New Books Success' , 
      data : body
    })
  } catch (error) {
    res.status(500).json({
      message  : 'Error Connecting to Database' , 
      errorMessage : error
    })
  }
}

const PUTFunction = async (req,  res) => {
  const {id} = req.params
  const {body}  = req
  try {
    await bookModels.updateBook(id, body)
    res.json({
      message : `Succesfull Update Book id : ${id}`
      , data : body
    })
  } catch (error) {
    res.status(500).json({
      message  : 'Error Connecting to Database' , 
      errorMessage : error
    })
  }
}

const DELETEFunction = async (req, res) => {
  const {id} = req.params
  const [data] = await bookModels.getAllBooks()
  try {
    await bookModels.deleteBook(id) 
    res.json({
      message : `Success Delete Book id = ${id}`
      , data : data[id]
    })
  } catch (error) {
    res.status(500).json({
      message  : 'Error Connecting to Database' , 
      errorMessage : error
    })
  }
}
module.exports = {GETFunction , POSTFunction , PUTFunction , DELETEFunction}