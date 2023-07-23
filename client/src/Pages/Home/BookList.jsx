import React from 'react'
import './homepage.css'

const BookList = (props) => {

  const {name , year} = props.data
  return (
    <div className='bookList'>
      <p>Title : {name}</p>
      <p>Year : {year}</p>
    </div>
  )
}

export default BookList