
const initialState = [];

export default function callCenters(state = initialState, action) {
  if(action.type === 'FETCH_CALLCENTERS_SUCCESS') {
    return action.payload;
  }
  return state;
}