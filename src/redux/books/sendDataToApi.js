import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/8uAGkqGHBMzF9G5Da8NZ/books';
const addBooks = createAsyncThunk('Booklists/post', async (bookList) => {
  try {
    await axios.post(url, bookList);
    return bookList;
  } catch (error) {
    return ('The error message is', error.response.data);
  }
});

export default addBooks;
