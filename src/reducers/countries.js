
const initialState = [];

export default function countries(state = initialState, action) {
  if
  //  (action.type === 'ADD_TRACK') {
  //   return [
  //     ...state,
  //     action.payload  
  //   ];
  // } else if 
  (action.type === 'FETCH_COUNTRIES_SUCCESS') {
    return action.payload;
  }
  return state;
}