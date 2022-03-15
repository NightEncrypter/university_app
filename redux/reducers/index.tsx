import {combineReducers} from 'redux';
import MainReducer, {initialStateTypes} from './universityReducer';

type main_reducer = {
  universityReducer: initialStateTypes;
};

export const rootReducer = combineReducers({
  universityReducer: MainReducer,
});
