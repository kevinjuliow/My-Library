const pool = require ('../config/database')


const getAllBooks = () => {
  const query = 'SELECT * FROM book'
  return pool.execute(query)
}

const createNewBooks = (body) => {
  const query = `INSERT INTO book (name , author , publisher , year , pages)
  VALUE ('${body.name}' , '${body.author}'  ,'${body.publisher}' , '${body.year}' , '${body.pages}')`
  return pool.execute(query)
}

const updateBook = (id , body) => {
  const query = `UPDATE book SET 
  name = '${body.name}', author = '${body.author}' , publisher = '${body.publisher}', year = '${body.year}' , 
  pages = '${body.pages}' WHERE id = ${id} `

  return pool.execute(query)
}

const deleteBook = (id) => {
  const query = `DELETE FROM book WHERE id = ${id}`

  return pool.execute(query)
}
module.exports = {getAllBooks , createNewBooks , updateBook , deleteBook}