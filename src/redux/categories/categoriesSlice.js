import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  status: '',
};

const myCategorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state) => ({ ...state, categories: 'Under construction' }),
  },
});

export const { checkStatus } = myCategorySlice.actions;
export default myCategorySlice.reducer;
