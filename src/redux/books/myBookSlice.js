import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/8uAGkqGHBMzF9G5Da8NZ/books';

export const fetchData = createAsyncThunk('Booklists/get', async (arg, { rejectWithValue }) => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

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
  reducers: {},
  extraReducers: {
    [fetchData.pending]: (state) => {
      state.loading = true;
    },
    [fetchData.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = newBooks(payload);
      state.isSuccess = true;
    },
    [fetchData.rejected]: (state, { payload }) => {
      state.message = payload;
      state.loading = false;
      state.isSuccess = false;
    },
  },

});

// export const { addBooks, removeBook } = myBooksSlice.actions;
export default booklists.reducer;
