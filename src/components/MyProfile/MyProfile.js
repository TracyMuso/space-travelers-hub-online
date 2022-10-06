import RocketList from './RocketList';
import MissionList from './MissionList';
import './MyProfile.css';

const MyProfile = () => (
  <>
    <div className="profile-header-container">
      <h2>My Missions</h2>
      <h2>My Rockets</h2>
    </div>
    <div className="profile-list-container">
      <ul>
        <MissionList />
      </ul>
      <ul>
        <RocketList />
      </ul>
    </div>
  </>
);

export default MyProfile;
