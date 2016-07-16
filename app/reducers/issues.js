import * as t from '../constants/ActionTypes';

const initialState = {
};

export default function issues(state = initialState, action) {
  switch(action.type) {
  case t.FETCH_ALL_ISSUES:
    return state;
  default:
    return state;
  }
}
