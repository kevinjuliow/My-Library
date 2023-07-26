import React from 'react'
import TextBox from './TextBox'
import {GrChapterAdd} from 'react-icons/gr'

const AddBook = () => {
  return (
    <div style={{display:'flex' , flexDirection:'column' , alignItems:"center" , marginTop : "5%" }}>
      <p style={{fontSize:"30px"}}>Add New Book</p>
      <TextBox props={"Book Title"}/>
      <TextBox props={"Author"}/>
      <TextBox props={"Publisher"}/> 
      <TextBox props={"Year Release"}/> 
      <TextBox props={"Total Pages"}/> 
      <div style={{position:"absolute" , right:"10%" ,cursor:"pointer", bottom:'50px' , display:'flex' , flexDirection:"column"}}>
      <GrChapterAdd style={{fontSize:"50px"}}/>
      <p style={{fontSize:"20px" , textAlign:"center"}}>Add</p>
      </div>
  
    </div>
  )
}

export default AddBook