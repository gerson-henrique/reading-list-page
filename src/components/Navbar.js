import React, { useContext } from 'react'
import { BookContext } from '../context/BookContext'


export default function Navbar() {
const {books} = useContext(BookContext);

  return (
    <div className="navbar">
      <h1>
        To - Read
      </h1>
      <p> Currently you have {books.length} books to read</p>
    </div>
  )
}
