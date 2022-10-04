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
    <ul className="rocket-list-container">
      {state.map((rocket) => (
        <Rocket
          key={rocket.id}
          name={rocket.name}
          description={rocket.description}
          flickrImages={rocket.flickr_images}
        />
      ))}
    </ul>
  );
};

const Rocket = ({ name, description, flickrImages }) => (
  <>
    <li>
      <h2>{name}</h2>
      <p>{description}</p>
      <img src={flickrImages} alt="A rocket launching" />
    </li>
  </>
);

Rocket.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  flickrImages: PropTypes.string.isRequired,
};

export default RocketsList;
