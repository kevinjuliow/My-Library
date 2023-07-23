import React, { useContext } from 'react'
import './bookSearch.css'
import SearchBar from './SearchBar'
import { BookContext } from '../../Context/Context'

const BookSearch = () => {
  const {searchedBooks , setSearchedBooks} = useContext(BookContext)
  return (
    <div className='searchPage'>
      <h1>Search Books</h1>
      <SearchBar/>

      <div className='search-results'>
        {searchedBooks.map((e)=>{ 
          return (
            <p>{e.name}</p>
          )
        })}
      </div>
    </div>
  )
}

export default BookSearch