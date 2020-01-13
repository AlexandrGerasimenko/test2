

import countries from './countries'
import callCenters from './callCenters'
// import CartReducer from './cartReducer'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

const allReducers = combineReducers({
   countries,
   callCenters
   // cart: CartReducer
});

export default createStore(allReducers, compose(
   applyMiddleware(thunk),
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))