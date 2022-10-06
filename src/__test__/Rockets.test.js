import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import RocketsList, { Rocket } from '../components/Rockets/Rockets';
import MyProfile from '../components/MyProfile/MyProfile';
import Missions from '../components/Missions/Missions';
import state from '../__mocks__/mockState';

describe('Testing Snapshots', () => {
  test('Rockets Snapshot', () => {
    const snapDragon = renderer.create(
      <Provider store={store}>
        <RocketsList />
      </Provider>,
    );
    const tree = snapDragon.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('My Profile Snapshot', () => {
    const snapProfile = renderer.create(
      <Provider store={store}>
        <MyProfile />
      </Provider>,
    );
    const tree = snapProfile.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('Missions SnapShot', () => {
    const snapMissions = renderer.create(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
    const tree = snapMissions.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('Rocket List Test', () => {
    const snapRocketList = renderer.create(
      <Provider store={store}>
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
      </Provider>,
    );
    const tree = snapRocketList.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
