import React from 'react'
import './bookSearch.css'

const BookResult = ({book}) => {
  return (
    <div className='bookResult'>
      <h1>{book.name} </h1>
      <div></div>
    </div>
  )
}

export default BookResult