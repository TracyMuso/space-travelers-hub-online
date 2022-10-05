import { useSelector } from 'react-redux';

const RocketList = () => {
  const state = useSelector((state) => state.rocketReducer);

  const reservedTrue = {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'row',
  };

  const reservedFalse = {
    display: 'none',
  };

  return (
    <>
      {state.map((item) => (
        <li key={item.id} style={item.reserved ? reservedTrue : reservedFalse}>
          {item.name}
        </li>
      ))}
    </>
  );
};

export default RocketList;
