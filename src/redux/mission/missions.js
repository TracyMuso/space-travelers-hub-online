const baseURL = 'https://api.spacexdata.com/v3/missions';
const FETCH_MISSIONS = 'missions/FETCH_MISSIONS';
const JOIN_MISSION = 'missions/JOIN_MISSION';
const LEAVE_MISSION = 'missions/LEAVE_MISSION';
const initialState = { missions: [], rockets: [] };

export const joinMission = (id) => async (dispatch) => {
  dispatch({
    type: JOIN_MISSION,
    payload: id,
  });
};

export const leaveMission = (id) => async (dispatch) => {
  dispatch({
    type: LEAVE_MISSION,
    payload: id,
  });
};

export const fetchMissions = () => async (dispatch) => {
  const response = await fetch(baseURL);
  const data = await response.json();
  dispatch({
    type: FETCH_MISSIONS,
    payload: data.map((mission) => ({
      id: mission.mission_id,
      name: mission.mission_name,
      description: mission.description,
      reserved: false,
    })),
  });
};

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MISSIONS:
      return { ...state, missions: action.payload };
    case JOIN_MISSION:
      return {
        ...state,
        missions: state.missions.map((mission) => {
          if (mission.id === action.payload) {
            return { ...mission, reserved: true };
          }
          return mission;
        }),
      };
    case LEAVE_MISSION:
      return {
        ...state,
        missions: state.missions.map((mission) => {
          if (mission.id === action.payload) {
            return { ...mission, reserved: false };
          }
          return mission;
        }),
      };
    default:
      return state;
  }
};

export default missionsReducer;
