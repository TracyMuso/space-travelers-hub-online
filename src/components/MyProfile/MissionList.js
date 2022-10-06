import { useSelector } from 'react-redux';

const MissionList = () => {
  const missions = useSelector((state) => state.missionsReducer);

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
      {missions.map((item) => (
        <li key={item.id} style={item.reserved ? reservedTrue : reservedFalse}>
          {item.name}
        </li>
      ))}
    </>
  );
};

export default MissionList;
