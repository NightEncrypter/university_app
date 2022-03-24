import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {UnitObject} from '../type';
// import {}

export interface UnitState {
  unitData: [] | UnitObject[];
  loading: boolean;
  hasErrors: boolean;
}
const initialState: UnitState = {
  unitData: [],
  loading: false,
  hasErrors: false,
};
export const unitSlice = createSlice({
  name: 'unit-slice',
  initialState,
  reducers: {
    loadingOn: state => {
      state.loading = true;
    },
    getUnitsSuccess: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.unitData = action.payload;
      state.hasErrors = false;
    },
    getUnitsFailure: state => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

export const {loadingOn, getUnitsFailure, getUnitsSuccess} = unitSlice.actions;

export default unitSlice.reducer;
