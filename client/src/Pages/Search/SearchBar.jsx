import React, { useContext, useState } from 'react'
import {FiSearch} from 'react-icons/fi'
import axios from 'axios'
import { BookContext } from '../../Context/Context'

const SearchBar = () => {
  const [searchQuery , setSearchQuery] = useState ("")
  const {searchedBooks,setSearchedBooks } = useContext(BookContext)

  const searchApi = async (value) => {
      await axios.get('http://localhost:4000/books').then((res)=> {
       const result = res.data.data.filter((book)=>{ 
         return book.name.toLowerCase().includes(value.toLowerCase())
       })
       setSearchedBooks(result)
      })
  }
  const handleSearch = (e) => {
    setSearchQuery(e.target.value)
    searchApi(e.target.value)
    console.log(searchedBooks);
  }

  return (
    <div style={{backgroundColor : "white" , width : "40%" , padding  :"1% 4%" , borderRadius: "20px" , position : 'relative'}}>
      <FiSearch/>
      <input type="text" style={{border : 'none' , marginLeft : '5%' , fontSize : "20px" , width : "80%"}}
       placeholder='Search...'
       value={searchQuery}
      onChange={(e)=>handleSearch(e)}
      />
    </div>
  )
}

export default SearchBar