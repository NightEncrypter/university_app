import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {GetTopic} from '../actions/topicActions';
import {TopicData, TopicObject} from '../type';

export interface TopicState {
  topicData: null | TopicObject;
  loading: boolean;
  hasErrors: boolean;
}

const initialState: TopicState = {
  loading: false,
  topicData: null,
  hasErrors: false,
};

export const topicSlice = createSlice({
  name: 'topic-slice',
  initialState,
  reducers: {
    // loadingOn: state => {
    //   state.loading = true;
    // },
  },

  extraReducers: builder => {
    builder.addCase(GetTopic.pending, (state, action) => {
      // At that moment,
      // we change status to `loading`
      // and clear all the previous errors:
      state.loading = true;
      state.hasErrors = false;
    });

    // When a server responses with the data,
    // `fetchTodos.fulfilled` is fired:
    builder.addCase(GetTopic.fulfilled, (state, action) => {
      // We add all the new todos into the state
      // and change `status` back to `idle`:

      console.log(action.payload, 'Payloads');
      //   if (action.payload) {
      state.loading = false;
      state.topicData = action?.payload;
      //   }
    });
  },

  // extraReducers: (builder)=>{
  //     builder.addCase(GetTopic.fulfilled, (state, action) => {

  //         // if (action.payload) {
  //         //     state.topicData=action.payload
  //         // }
  //    })
  //     // state.topicData=action.payload.data

  // }
});

export const {} = topicSlice.actions;

export default topicSlice.reducer;
