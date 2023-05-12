import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/8uAGkqGHBMzF9G5Da8NZ/books';
const removeBooks = createAsyncThunk('Booklists/remove', async (bookId) => {
  try {
    await axios.delete(`${url}/${bookId}`);
    return bookId;
  } catch (error) {
    return ('Could not delete', error.response.data);
  }
});

export default removeBooks;
