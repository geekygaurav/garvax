import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
  requestUser: ['fetching'],
  successUser: ['payload'],
  failureUser: ['fail']

})

export const UserTypes = Types
export default Creators

const INITIAL_STATE = Immutable({
    fetching : false,
    payload : null,
    fail : false
});
/** reducer **/
const request = (state) => state.merge({ fetching: true })

const success = (state, { payload }) => {
    // console.log('reducer storeAudits',audits)
    return state.merge({ payload , fetching : false })
  }
  const failure = (state) => {
    // console.log('reducer storeAudits',audits)
    return state.merge({ fail : true , fetching : false })
  }
export const reducer = createReducer(INITIAL_STATE, {
  [Types.REQUEST_USER]: request,
  [Types.SUCCESS_USER]: success,
  [Types.FAILURE_USER]: failure,

})

