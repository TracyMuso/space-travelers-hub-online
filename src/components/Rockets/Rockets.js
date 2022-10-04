import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchRocketList } from '../../redux/actions/rocketsActions';

const Rockets = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.rocketReducer);

  useEffect(() => {
    dispatch(fetchRocketList());
  }, [dispatch]);

  return (
    <>
      <h1>{state[0].id}</h1>
      <h2>{state[0].name}</h2>
      <h1>{state[0].type}</h1>
      <h1>{state[0].flickr_images}</h1>
    </>
  );
};

export default Rockets;
