import { FETCH_API, BOOK_ROCKET } from '../actions/rocketsActions';

const initialState = [];

const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${FETCH_API}/fulfilled`:
      return action.payload;
    case BOOK_ROCKET:
      return (state.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return { ...rocket, reserved: !rocket.reserved };
      }));
    default:
      return state;
  }
};

export default rocketReducer;
