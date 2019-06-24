import { combineReducers } from 'redux';

// const INITIAL_STATE = {
//     username:null,
//     userid:null
// };

// const loginreducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     default:
//       return state
//   }
// };

export default combineReducers({
  garvax: require('./indexReducer').reducer,
});