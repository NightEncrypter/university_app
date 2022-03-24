import {
  loadingOn,
  getUnitsFailure,
  getUnitsSuccess,
} from '../slices/unitsSlices';

import {Dispatch} from '@reduxjs/toolkit';
import {url} from '../../utils/url';

export const getAllUnits =
  (subject: number | string) => async (dispatch: Dispatch) => {
    const mainUrl = 'uploads/subjects/';

    try {
      dispatch(loadingOn());
      const response = await fetch(`${url}${mainUrl}${subject}`);

      if (!response.ok) {
        dispatch(getUnitsFailure());
      }
      const data = await response.json();
      // console.log(data, 'unit');
      dispatch(getUnitsSuccess(data));
    } catch (error) {
      // console.log(error);
      dispatch(getUnitsFailure());
    }
  };
