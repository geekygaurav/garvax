import { combineReducers } from 'redux';

export default combineReducers({
  garvax: require('./indexReducer').reducer,
  beer: require('./BeerRedux').reducer,
  githubuser: require('./GithubUserRedux').reducer,
  guru: require('./GuruRedux').reducer
});