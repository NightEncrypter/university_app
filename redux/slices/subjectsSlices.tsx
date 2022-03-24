import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {subjectObject} from '../type';

// "desc": "",
//         "id": 1,
//         "img": "https://i.postimg.cc/vmM1Hnrc/books.jpg",
//         "name": "Vlsi-II",
//         "subject_status": 1,
//         "units": [
//             1
//         ]
export interface SubjectState {
  data: subjectObject[] | [];
  loading: boolean;
  hasErrors: boolean;
}
const initialState: SubjectState = {
  data: [],
  loading: false,
  hasErrors: false,
};

export const subjectSlice = createSlice({
  name: 'subject-slice',
  initialState,
  reducers: {
    loadingOn: state => {
      state.loading = true;
    },
    getSubjectsSuccess: (state, action: PayloadAction<subjectObject[]>) => {
      state.loading = false;
      state.data = action.payload;
      state.hasErrors = false;
    },
    getSubjectsFailure: state => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

export const {loadingOn, getSubjectsFailure, getSubjectsSuccess} =
  subjectSlice.actions;

export default subjectSlice.reducer;
