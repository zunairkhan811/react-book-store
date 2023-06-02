import { combineReducers } from '@reduxjs/toolkit';
import booklists from './books/myBookSlice';

const rootReducer = combineReducers({
  books: booklists,
});

export default rootReducer;
