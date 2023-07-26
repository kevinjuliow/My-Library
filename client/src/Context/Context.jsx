import React, { createContext , useState } from 'react'

export const BookContext = createContext(null)

const ContextProvider = (props) => {
  const [bookListClicked , setBookListClicked] = useState (false)
  const [searchedBooks , setSearchedBooks] = useState ([])
  const [refetch , setRefetch] = useState(false)
  const value = {
    bookListClicked , setBookListClicked , searchedBooks , setSearchedBooks , refetch , setRefetch
  }
  return (
    <BookContext.Provider value={value}>
      {props.children}
    </BookContext.Provider>
  )
}

export default ContextProvider