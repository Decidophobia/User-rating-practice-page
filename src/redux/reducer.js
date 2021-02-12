import { GET_USER, SORT_USER, ADD_RATING_LIST } from './actionTypes';

export function reducer(state = { users: [], sort: "asc" }, action) {
  switch (action.type) {
    case GET_USER:
      return { ...state, users: action.payload };
    case ADD_RATING_LIST:
      return {
        ...state,
        ratingList: state.users
          .sort((a, b) => b.rating - a.rating)
          .map((user, i) => {
            user.ratingPosition = i + 1;
            return user;
          }),
      };
    case SORT_USER:
      if (action.payload === 'asc') {
        return {
          ...state,
          user: state.users.sort((a, b) => b.rating - a.rating),
          sort: 'asc',
        };
      }
      return {
        ...state,
        user: state.users.sort((a, b) => a.rating - b.rating),
        sort: 'desc',
      };
    default:
      return state;
  }
}
