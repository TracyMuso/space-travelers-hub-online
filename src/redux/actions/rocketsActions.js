import { createAsyncThunk } from '@reduxjs/toolkit';

export const FETCH_API = 'components/redux/actions/rocketsActions/FETCH_API';
export const BOOK_ROCKET = 'components/redux/actions/rocketsActions/BOOK_ROCKET';
const BASE_URL = 'https://api.spacexdata.com/v3/rockets';

// Create Async Thunk based action
export const fetchRocketList = createAsyncThunk(FETCH_API, async () => {
  const response = await fetch(BASE_URL);
  const data = await response.json();
  const payload = data.map((e) => ({
    id: e.id,
    name: e.rocket_name,
    description: e.description,
    flickr_images: e.flickr_images[0],
    reserved: false,
  }));
  return payload;
});

// Create Rocket Booking Action
export const onReserveAction = (id) => ({
  type: BOOK_ROCKET,
  payload: id,
});
