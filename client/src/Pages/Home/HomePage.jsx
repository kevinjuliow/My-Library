import React, { useEffect, useState } from 'react'
import './homepage.css'
import ContactList from './ContactList'
import axios from 'axios'


const HomaPage = () => {
  const [books , setBooks] = useState([])

  const GETApi = async () =>{
        await axios.get('http://localhost:4000/books').then((res)=>{
          setBooks(res.data.data)
        }).catch((err)=>{
          console.error(err)
        })
  }
  
  useEffect(()=>{
    GETApi()
  } , [] )
  return (
    <div className='homePage'>
      <div className='left-homePage'>
        <h1>My Books</h1>
        <div >
        {books.map((e)=>{
          return (
<           ContactList data={e}/>
          )
        })}
        </div>
      </div>
      <div className='right-homePage'>asd</div>
    </div>
  )
}

export default HomaPage