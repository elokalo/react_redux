import { combineReducers } from 'redux'
import cakeReducer from './cake/cakeReducer'
import userReducer from './user/userReducer'
import iceCreamReducer from './iceCream/iceCreamReducer'

/**
 * In this file combine all the reducers that can be passed
 * to the create store function, when you do that the state
 * now be an object
 */
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: userReducer
})

export default rootReducer