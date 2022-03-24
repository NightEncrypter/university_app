import {createAsyncThunk} from '@reduxjs/toolkit';
import {url} from '../../utils/url';
import {TopicData} from '../type';

type FetchTodosError = {
  message: string;
};
export const GetTopic = createAsyncThunk<
  TopicData,
  number,
  {rejectValue: FetchTodosError}
>('getTopics/topics', async topicId => {
  console.log(topicId);
  const res = await fetch(
    `https://eagertolearn.herokuapp.com/api/uploads/topics/${topicId}`,
  );

  const data = await res.json();
  //   console.log('get TopicData', data);
  if (!res.ok) {
    throw new Error(res.status.toString());
  }

  return data;
});
