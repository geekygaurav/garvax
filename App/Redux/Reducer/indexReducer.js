import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
  storeUsername: ['username'],
  storeUserid: ['userid'],

})

export const TemperatureTypes = Types
export default Creators

const INITIAL_STATE = Immutable({
  username:null,
  userid:null
});
/** reducer **/
 const storeUsername = (state, { username }) => {
  // console.log('reducer storeAudits',audits)
  return state.merge({ username: username })
}
const storeUserid = (state, { userid }) => {
    // console.log('reducer storeAudits',audits)
    return state.merge({ userid: userid })
  }
export const reducer = createReducer(INITIAL_STATE, {
  [Types.STORE_USERNAME]: storeUsername,
  [Types.STORE_USERID]: storeUserid,
})

