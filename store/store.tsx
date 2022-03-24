import {configureStore} from '@reduxjs/toolkit';

import contentReducer from '../redux/slices/contentSlicer';
import subjectsSlices from '../redux/slices/subjectsSlices';
import topicsSlice from '../redux/slices/topicsSlice';
import unitSlice from '../redux/slices/unitsSlices';

export const store = configureStore({
  reducer: {
    mainContent: contentReducer,
    subjects: subjectsSlices,
    units: unitSlice,
    topics: topicsSlice,
  },
});

// infer the RootState and 'AppDispatch' types from the store itsef
export type RootState = ReturnType<typeof store.getState>;

// Inferred type :{posts: PostsState,comments:CommentState,users:UserState}
export type AppDispatch = typeof store.dispatch;
