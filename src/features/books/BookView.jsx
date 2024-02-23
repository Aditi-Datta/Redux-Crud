import React from 'react'
import { useSelector } from 'react-redux'

function BookView() {
  

  const books = useSelector((state) => state.booksReducer.books);
  return (
    <>
    
    <h2>List Of Books</h2> <br></br>
    <table>
    <thead>
    <tr>
    <th>ID</th>
    <th>Title</th>
    <th>Author</th>
    <th>Action</th>
    </tr>
    </thead>
    <tbody>
    {books && books.map((book) => {
      const {id, title, author} = book;
      return <tr key={id}>
      <td>{id}</td>
      <td>{title}</td>
      <td>{author}</td>
      <td>
      <button>Edit</button>
      <button>Delete</button>
      </td>
      </tr> 
    })}
    </tbody>
    </table>
    </>
  )
}

export default BookView