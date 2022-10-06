/* eslint-disable no-console */
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from './components/Navbar/Navbar';
import MyProfile from './components/MyProfile/MyProfile';
import Missions from './components/Missions/Missions';
import RocketsList from './components/Rockets/Rockets';
import store from './redux/configureStore';

const App = () => (
  <Provider store={store}>
    <Navbar />
    <Routes>
      <Route path="/" element={<RocketsList />} />
      <Route path="Missions" element={<Missions />} />
      <Route path="MyProfile" element={<MyProfile />} />
    </Routes>
  </Provider>
);

export default App;
