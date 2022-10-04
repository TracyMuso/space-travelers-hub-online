import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchRocketList } from '../../redux/actions/rocketsActions';

const RocketsList = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.rocketReducer);

  useEffect(() => {
    dispatch(fetchRocketList());
  }, [dispatch]);

  return (
    <>
      {state.map((rocket) => (
        <Rocket
          key={rocket.id}
          name={rocket.name}
          type={rocket.type}
          flickrImages={rocket.flickr_images}
        />
      ))}
    </>
  );
};

const Rocket = ({ name, type, flickrImages }) => (
  <>
    <h1>{name}</h1>
    <h1>{type}</h1>
    <h1>{flickrImages}</h1>
  </>
);

Rocket.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  flickrImages: PropTypes.string.isRequired,
};

export default RocketsList;
