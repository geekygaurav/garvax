import { combineReducers } from 'redux';

export default combineReducers({
  garvax: require('./indexReducer').reducer,
  beer: require('./BeerRedux').reducer
});