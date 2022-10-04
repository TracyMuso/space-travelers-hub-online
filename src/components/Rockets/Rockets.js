import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchRocketList } from '../../redux/actions/rocketsActions';
import './Rocket.css';

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
      <img src={flickrImages} alt="A rocket launching" />
      <div>
        <h2>{name}</h2>
        <p>
          <span>Booked</span>
          {description}
        </p>
        <button type="button">Reserve Rocket</button>
      </div>
    </li>
  </>
);

Rocket.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  flickrImages: PropTypes.string.isRequired,
};

export default RocketsList;
