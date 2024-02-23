import { createSlice } from '@reduxjs/toolkit'

const initalBooks = {
    books: [
        {
            id: 1,
            title: "Love Bangladdesh",
            author: "Aditi Datta"
        },
        {
            id: 2,
            title: "Bangladdeshiii Here",
            author: "Aditi Datta"
        },
    ], 
};

const booksSlice = createSlice({
    name: 'books',
    initialState: initalBooks,
    reducers:{
        showBooks: (state) => state,
    },
});


export const {showBooks} = booksSlice.actions;
export default booksSlice.reducer;

