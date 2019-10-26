import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
  requestBeer: ['fetching'],
  successBeer: ['payload'],
  failureBeer: ['fail']

})

export const BeerTypes = Types
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
  [Types.REQUEST_BEER]: request,
  [Types.SUCCESS_BEER]: success,
  [Types.FAILURE_BEER]: failure,

})

