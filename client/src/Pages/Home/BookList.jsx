import React from 'react'
import './homepage.css'
import {TbTrash} from 'react-icons/tb'

const BookList = (props) => {

  const {name , year} = props.data
  return (
    <div className='bookList'>
      <p>Title : {name}</p>
      <p>Year : {year}</p>
      <TbTrash style={{position : 'absolute' , right : '20px' , bottom : '17px' , fontSize : '18px'}} className='trash' />
    </div>
  )
}

export default BookList