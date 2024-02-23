import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteBook } from './BooksSlice';
import { Link } from 'react-router-dom';

function BookView() {
  
  
  const books = useSelector((state) => state.booksReducer.books);
  const dispatch = useDispatch();

  const handleDeleteBook = (id) => {
    dispatch(deleteBook(id));
  }
  
  return (
    <>
    
    <h2>List Of Books</h2> <br></br>
    <table>
    <thead>
    <tr>
   
    <th>Title</th>
    <th>Author</th>
    <th>Action</th>
    </tr>
    </thead>
    <tbody>
    {books && books.map((book) => {
      const {id, title, author} = book;
      return <tr key={id}>
      
      <td>{title}</td>
      <td>{author}</td>
      <td>
      <Link to='/edit-book' state={{id, title, author}}>
      <button>Edit</button>
      </Link>

      <button onClick={() => {handleDeleteBook(id)}}>Delete</button>
      </td>
      </tr> 
    })}
    </tbody>
    </table>
    </>
  )
}

export default BookView