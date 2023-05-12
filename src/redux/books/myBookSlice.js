import { createSlice } from '@reduxjs/toolkit';
import fetchData from './fetchApi';
import addBooks from './sendDataToApi';
import removeBooks from './removeDataFromApi';

const initialState = {
  data: [],
  isSuccess: false,
  message: '',
  loading: false,
};

const newBooks = (payload) => {
  const keys = Object.keys(payload);
  const array = [];
  keys.forEach((key) => {
    array.push({
      item_id: key,
      ...payload[key][0],
    });
  });
  return array;
};
const booklists = createSlice({
  name: 'Booklist',
  initialState,
  extraReducers:(builder)=>{
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = newBooks(action.payload);
        state.isSuccess = true;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.message = action.payload;
        state.loading = false;
        state.isSuccess = false;
      })
      .addCase(addBooks.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(removeBooks.fulfilled, (state, action) => {
        state.data = state.data.filter((book) => book.item_id !== action.payload);
      })
  },

});

// export const { addBooks, removeBook } = myBooksSlice.actions;
export default booklists.reducer;
