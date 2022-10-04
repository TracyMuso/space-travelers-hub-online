import { createAsyncThunk } from '@reduxjs/toolkit';

export const FETCH_API = 'components/redux/actions/rocketsActions';
const BASE_URL = 'https://api.spacexdata.com/v3/rockets';

// Create Async Thunk based action
export const fetchRocketList = createAsyncThunk(FETCH_API, async () => {
  const response = await fetch(BASE_URL);
  const data = await response.json();
  const payload = data.map((e) => ({
    id: e.id,
    name: e.rocket_name,
    type: e.rocket_type,
    flickr_images: e.flickr_images[0],
  }));
  return payload;
});
