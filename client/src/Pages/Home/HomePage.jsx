import React, { useContext, useEffect, useState } from 'react'
import './homepage.css'
import axios from 'axios'
import BookList from './BookList'
import BookClicked from './BookClicked'
import { BookContext } from '../../Context/Context'


const HomaPage = () => {
  const {bookListClicked , setBookListClicked} = useContext(BookContext)
  const [books , setBooks] = useState([])
  const [selectedId , setSelectedId] = useState(null)
  const [selectedBook , setSelectedBook] = useState({})
  
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


    const handleClick = (id) => {
      setBookListClicked(true)
      setSelectedId(id)
      const selectedBook = books.find((books) => books.id === id)
      setSelectedBook(selectedBook)
    }

  return (
    <div className='homePage'>
      <div className='left-homePage'>
        <h1>My Books</h1>
        <div className='bookClicked-container' >
        {books.map((e)=>{
          return (
            <div onClick={()=>handleClick(e.id)} > 
                <BookList data={e} key={e.id}/>
            </div>
          )
        })}
        </div>
      </div>
      <div className='right-homePage'>
        {bookListClicked && <BookClicked data={selectedBook}/>}
      </div>
    </div>
  )
}

export default HomaPage