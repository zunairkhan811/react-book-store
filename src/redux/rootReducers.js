import { combineReducers } from '@reduxjs/toolkit';
import myBooksSlice from './books/myBookSlice';
import myCategorySlice from './categories/categoriesSlice';

const rootReducer = combineReducers({
  books: myBooksSlice,
  categories: myCategorySlice,
});

export default rootReducer;
