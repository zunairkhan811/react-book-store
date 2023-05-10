import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  myBooks: [
    {
      item_Id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      item_Id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      item_Id: 'item3',
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
    removeBook: (state, action) => ({
      ...state,
      myBooks: state.myBooks.filter((book) => book.item_Id !== action.payload),
    }),

  },

});

export const { addBooks, removeBook } = myBooksSlice.actions;
export default myBooksSlice.reducer;
