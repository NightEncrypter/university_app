import {UNIVERSITY} from '../type';

export type initialStateTypes = {
  university_data: {id: number; user: string}[];
};
const initialState: initialStateTypes = {
  university_data: [
    {
      id: Math.floor(Math.random() * 100 + 1),
      user: 'manas',
    },
    {
      id: Math.floor(Math.random() * 100 + 1),
      user: 'ansh',
    },
    {
      id: Math.floor(Math.random() * 100 + 1),
      user: 'john doe',
    },
  ],
};

const MainReducer = (state = initialState, type: any) => {
  switch (type) {
    case UNIVERSITY:
      return {
        ...state,
      };
    default:
      return state;
  }
};
export default MainReducer;
