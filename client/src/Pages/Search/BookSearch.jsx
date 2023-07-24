import React, { useContext } from 'react'
import './bookSearch.css'
import SearchBar from './SearchBar'
import { BookContext } from '../../Context/Context'
import BookResult from './BookResults'

const BookSearch = () => {
  const {searchedBooks , setSearchedBooks} = useContext(BookContext)
  return (
    <div className='searchPage'>
      <h1>Search Books</h1>
      <SearchBar/>

      <div className='search-results'>
        { 
        searchedBooks.map((book)=>{ 
          return (
            <BookResult book={book}/>
          )
        })}
      </div>
    </div>
  )
}

export default BookSearch