/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import './Missions.css';
import { joinMission, fetchMissions, leaveMission } from '../../redux/mission/missions';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missionsReducer);

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  const handleJoin = (id) => {
    dispatch(joinMission(id));
  };

  const handleLeave = (id) => {
    dispatch(leaveMission(id));
  };

  return (
    <section id="missions">
      <table id="mission-table">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>{'  '}</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.id}>
              <td>{mission.name}</td>
              <td>{mission.description}</td>
              {mission.reserved ? (
                <>
                  <td>
                    <Button className="btn btn-success">Active member</Button>
                  </td>
                  <td>
                    <Button className="btn btn-danger" onClick={() => handleLeave(mission.id)}>Leave Mission</Button>
                  </td>
                </>
              ) : (
                <>
                  <td>
                    <Button variant="outline-secondary" className="btn btn-secondary">Not a member</Button>
                  </td>
                  <td>
                    <Button variant="outline-primary" className="btn btn-primary" onClick={() => handleJoin(mission.id)}>Join Mission</Button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Missions;
