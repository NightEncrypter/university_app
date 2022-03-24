import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {
  data: [],
};

export const contentSlice = createSlice({
  name: 'content-slice',
  initialState,
  reducers: {},
});

export const {} = contentSlice.actions;

export default contentSlice.reducer;
