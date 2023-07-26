import React, { useState } from 'react'
import TextBox from './TextBox'
import {GrChapterAdd} from 'react-icons/gr'
import axios from 'axios'

const AddBook = () => {
  const [bookTitle , setBookTitle] = useState('')
  const [bookAuthor , setBookAuthor] = useState('')
  const [bookYear , setBookYear] = useState(0)
  const [bookPublisher , setBookPublisher] = useState('')
  const [bookPages , setBookPages] = useState()
  
  const createBook = async()=>{
    try {
      await axios.post('http://localhost:4000/books' , 
      {
        name : bookTitle , 
        author : bookAuthor , 
        publisher : bookPublisher , 
        year : bookYear ,
        pages : bookPages
      }
  ).then((res)=>{
    console.log('Success Create New Book');
    console.log(res.data)
    alert('Book Created')
  })
    }catch(err){
      alert("Error Creating new Book") ;
      console.error(err)
    }
   
  }
 
  

  return (
    <div style={{display:'flex' , flexDirection:'column' , alignItems:"center" , marginTop : "5%" }}>
      <p style={{fontSize:"30px"}}>Add New Book</p>
      <TextBox props={"Book Title"} value={bookTitle} onChange={setBookTitle}/>
      <TextBox props={"Author"}  value={bookAuthor} onChange={setBookAuthor}/>
      <TextBox props={"Publisher"}  value={bookPublisher} onChange={setBookPublisher}/> 
      <TextBox props={"Year Release"}  value={bookYear} onChange={setBookYear}/> 
      <TextBox props={"Total Pages"}  value={bookPages} onChange={setBookPages}/> 
      <div style={{position:"absolute" , right:"10%" ,cursor:"pointer", bottom:'50px' , display:'flex' , flexDirection:"column"}} onClick={createBook}>
      <GrChapterAdd style={{fontSize:"50px"}} />
      <p style={{fontSize:"20px" , textAlign:"center"}}>Add</p>
      </div>
  
    </div>
  )
}

export default AddBook