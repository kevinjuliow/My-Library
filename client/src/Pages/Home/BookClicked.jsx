import React, { useContext, useState } from 'react'
import {IoMdClose} from 'react-icons/io'
import { BookContext } from '../../Context/Context'
import {TbTrash} from 'react-icons/tb'
import axios from 'axios'

const BookClicked = (props) => {
  const [isHovered , setIsHovered] = useState(false)
  const {setBookListClicked , setRefetch} = useContext(BookContext)
  const {id , name , year , author , publisher , pages} = props.data
  
  const deleteBook = () => {
    axios.delete(`http://localhost:4000/books/${id}`)
    setRefetch(true)
  }

  const link = () => {
    return (
      <>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
      <link href="https://fonts.googleapis.com/css2?family=Sofia&display=swap" rel="stylesheet"></link>
      </>
    )
  }
  const xClicked = () => {
    setBookListClicked(false)
  }


  return (
    <div style={{display :'flex' , flexDirection:'column' , position :"relative" , height : '100%'}}>
      {link()}
      <IoMdClose style={{position : 'absolute' , right:"10px" , top: "10px" , cursor: 'pointer' , fontSize:'45px'}} onClick={xClicked}/>
      <h1 style={{width:'100%' , fontSize :'55px' , textAlign:'center' , marginTop : '140px' , fontFamily: 'Sofia, cursive'}}>{name}</h1>
      <ul style={{alignSelf :"center"}}>
        <li style={{marginLeft :"30px", marginTop :"100px" , fontSize:'15px'}}><strong>Author:</strong>&nbsp;{author}</li>
        <li style={{marginLeft :"30px" , fontSize:'15px' , marginTop :"15px"}}><strong>Publisher:</strong>&nbsp;{publisher}</li>
        <li style={{marginLeft :"30px" , fontSize:'15px', marginTop :"15px"}}><strong>Year Release:</strong>&nbsp;{year}</li>
        <li style={{marginLeft :"30px" , fontSize:'15px', marginTop :"15px"}}><strong>Book Pages:</strong>&nbsp;{pages}</li>
      </ul>
      <TbTrash style={{position:'absolute' , right : '20px' ,cursor:'pointer' , bottom : "50px" , fontSize : "30px"}} onClick={deleteBook}/>
    </div>
  )
}

export default BookClicked