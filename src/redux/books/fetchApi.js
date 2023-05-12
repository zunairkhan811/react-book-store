import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/8uAGkqGHBMzF9G5Da8NZ/books';
const fetchData = createAsyncThunk('Booklists/get', async (arg, { rejectWithValue }) => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export default fetchData;
