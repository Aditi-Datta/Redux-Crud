import React, { useState } from 'react'
import { useSelector } from 'react-redux';

function AddBook() {

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const numberOfBooks = useSelector((state) => state.booksReducer.books.length);

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = { id = numberOfBooks + 1 ,title, author};
  }

  return (
    <>
    
    <h2 style:  >Add Book</h2> 

    <form onSubmit={handleSubmit}>
    <div className='form-field'>
      <label htmlFor='title'>Title: </label> <br></br>
      <input type='text' id='title' name='title' value={title} onChange={(e) => setTitle(e.target.value)} ></input>
      
      </div>
    </form>
    <br></br>
    
    <form>
    <div className='form-field'>
      <label htmlFor='author'>Author: </label> <br></br>
      <input type='text' id='author' name='author' value={author} onChange={(e) => setAuthor(e.target.value)} ></input>
     
      </div>
      <br></br>
      <button type='submit'>Add Book</button>

    </form>



    </>
  )
}

export default AddBook