import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Error from '../pages/Error';
import Navbar from '../layouts/Navbar';
import BookView from '../features/books/BookView';
import AddBook from '../features/books/AddBook';
import EditBook from '../features/books/EditBook';

function Index() {
  return (
    <BrowserRouter>
    <Navbar> </Navbar>
    
    <main>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/show-books' element={<BookView />} />
    <Route path='/add-book' element={<AddBook />} />
    <Route path='/edit-book' element={<EditBook />} />

    <Route path='*' element={<Error />} />
    </Routes>
    </main>

    </BrowserRouter>
  )
};

export default Index