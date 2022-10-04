import { FETCH_API } from '../actions/rocketsActions';

const initialState = [];

const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${FETCH_API}/fulfilled`:
      return action.payload;
    default:
      return state;
  }
};

export default rocketReducer;
