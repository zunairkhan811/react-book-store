import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  myBooks: [
    {
      item_id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      item_id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      item_id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
};
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
