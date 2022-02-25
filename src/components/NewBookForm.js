import React, { useContext, useState } from 'react'
import { BookContext } from '../context/BookContext'

export default function NewBookForm() {
  const {addBook} = useContext(BookContext)
  const [title, setTitle]= useState('')
  const [author, setAuthor]= useState('')
  const handleSubmit = (e) => {
    addBook(title, author);
    setTitle('');
    setAuthor('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Book Title" value={title} onChange={(e)=> setTitle(e.target.value)} required/>
       <input type="text" placeholder="Book Author" value={author} onChange={(e)=> setAuthor(e.target.value)} required/>
       <input type='submit' value="add book" />
    </form>
  )
}
