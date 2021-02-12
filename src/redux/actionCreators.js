import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-dom';
import { GET_USER, SORT_USER, ADD_RATING_LIST } from './actionTypes';

export const getUserAC = (payload) => ({
  type: GET_USER,
  payload,
});
export const sortUserAC = (payload) => ({
  type: SORT_USER,
  payload,
});

export const addRetingListAC = (payload) => ({
  type: ADD_RATING_LIST,
  payload,
});
