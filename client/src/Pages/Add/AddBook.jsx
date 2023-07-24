import React from 'react'
import TextBox from './TextBox'

const AddBook = () => {
  return (
    <div style={{display:'flex' , flexDirection:'column' , alignItems:"center" , marginTop : "5%" }}>
      Add New Book
      <TextBox props={"Book Title"}/>
      <TextBox props={"Author"}/>
      <TextBox props={"Publisher"}/> 
      <TextBox props={"Year Release"}/> 
      <TextBox props={"Total Pages"}/> 
    </div>
  )
}

export default AddBook