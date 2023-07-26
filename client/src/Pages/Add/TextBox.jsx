import React from 'react'

const TextBox = ({props , value , onChange}) => {
  return (
    <div style={{width: "80%" , display :"flex", flexDirection:'column' , alignItems :"center" , marginTop : "3%"}}>
      <p style={{fontSize :"18px"}}>{props}</p>
      <input type="text" 
      placeholder={`Input ${props}`}
      onChange={(e)=>onChange(e.target.value)}
      style={{border:"none" , width : "50%" , borderBottom:"1px solid black" , paddingTop:"6px" , backgroundColor:"unset" , outline :"none" , fontSize:"16px" ,textAlign:'center' }}
      />
    </div>
  )
}

export default TextBox