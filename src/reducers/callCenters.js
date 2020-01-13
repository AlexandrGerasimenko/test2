
const initialState = [];

export default function callCenters(state = initialState, action) {
  if
  //  (action.type === 'ADD_TRACK') {
  //   return [
  //     ...state,
  //     action.payload  
  //   ];
  // } else if 
  (action.type === 'FETCH_CALLCENTERS_SUCCESS') {
    return action.payload;
  }
  return state;
}