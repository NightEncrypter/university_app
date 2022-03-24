import {
  getSubjectsSuccess,
  loadingOn,
  getSubjectsFailure,
} from '../slices/subjectsSlices';

import {Dispatch} from '@reduxjs/toolkit';
import {url} from '../../utils/url';

const mainUrl = 'uploads/subjects';
export const getAllSubjects = () => async (dispatch: Dispatch) => {
  dispatch(loadingOn());

  try {
    const response = await fetch(`${url}${mainUrl}`);
    const data = await response.json();

    dispatch(getSubjectsSuccess(data));
  } catch (error) {
    // console.log(error);
    dispatch(getSubjectsFailure());
  }
};
