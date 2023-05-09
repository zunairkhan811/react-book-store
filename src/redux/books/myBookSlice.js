import { createSlice } from '@reduxjs/toolkit';

const initialState = { myBooks: [] };
const myBooksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBooks: (state, action) => {
      state.myBooks.push(action.payload);
    },

  },
  removedBooks: (state, action) => {
    state.books = state.books.filter((book) => book.id !== action.payloaded);
  },

});

export const { addBooks, removedBooks } = myBooksSlice.actions;
export default myBooksSlice.reducer;
