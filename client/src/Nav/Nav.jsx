import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
import {LuContact} from 'react-icons/lu'
import {FiSearch} from 'react-icons/fi'
import {CgAddR} from 'react-icons/cg'

const Nav = () => {
  const [homeClick , setHomeClick] = useState(true)
  const [searchClick , setSearchClick] = useState(false)
  const [addClick , setAddClick] = useState(false)
  const RouteClick = (a , b , c) =>{
    a(true)
    b(false)
    c(false)
  }
  return (
    <div className='Nav'>
      <Link to={'/'} style={{color: homeClick? 'black' : 'rgb(156, 156, 156 , 0.5)'}} onClick={()=>RouteClick(setHomeClick , setSearchClick , setAddClick)}> <LuContact/> </Link>
      <Link to={'/search'} style={{color:searchClick? 'black' : 'rgb(156, 156, 156 , 0.5)'}} onClick={( )=>RouteClick(setSearchClick , setHomeClick , setAddClick)} > <FiSearch/> </Link>
      <Link to={'/add'} style={{color:addClick? 'black' : 'rgb(156, 156, 156 , 0.5)'}} onClick={( )=>RouteClick(setAddClick , setHomeClick , setSearchClick )}> <CgAddR/> </Link>
    </div>
  )
}

export default Nav