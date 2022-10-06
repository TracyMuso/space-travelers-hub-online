import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchRocketList, onReserveAction } from '../../redux/actions/rocketsActions';
import './Rocket.css';

const RocketsList = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.rocketReducer);

  useEffect(() => {
    if (state.length === 0) dispatch(fetchRocketList());
  }, [dispatch, state.length]);

  return (
    <ul className="rocket-list-container">
      {state.map((rocket) => (
        <Rocket
          key={rocket.id}
          id={rocket.id}
          name={rocket.name}
          description={rocket.description}
          flickrImages={rocket.flickr_images}
          reserved={rocket.reserved}
        />
      ))}
    </ul>
  );
};

export const Rocket = ({
  name, description, flickrImages, id, reserved,
}) => {
  const dispatch = useDispatch();

  const onReserveHandler = (id) => {
    dispatch(onReserveAction(id));
  };

  const bookValid = {
    backgroundColor: 'dodgerblue',
    border: '0',
    borderRadius: '5px',
    color: 'whitesmoke',
    padding: '7px',
  };

  const bookNull = {
    backgroundColor: '#fff',
    border: 'solid 1px grey',
    borderRadius: '5px',
    color: 'grey',
    padding: '7px',
    boxShadow: 'grey',
  };

  const spanValid = {
    backgroundColor: 'darkseagreen',
    borderRadius: '5px',
  };
  const spanNull = {
    display: 'none',
  };

  return (
    <>
      <li>
        <img src={flickrImages} alt="A rocket launching" />
        <div>
          <h2>{name}</h2>
          <p>
            <span style={reserved ? spanValid : spanNull}>Booked</span>
            {description}
          </p>
          <button style={reserved ? bookNull : bookValid} type="button" onClick={() => onReserveHandler(id)}>
            {reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
          </button>
        </div>
      </li>
    </>
  );
};

Rocket.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  flickrImages: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default RocketsList;
