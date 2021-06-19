//Simply example of the use of Redux with JavaScript
const redux = require('redux')
const reduxLogger = require('redux-logger')
const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()
/**
 * First step you create an Action Type constant
 * and a function that represents this Action
 * */
const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'
function buyCake() {
  return {
    type: BUY_CAKE,
    info: 'First redux'
  }
}

function buyIceCream() {
  return {
    type: BUY_ICECREAM,
  }
}

/**
 * Second step create a reducer to connect/ties the store
 * and the action, the reducer receives like arguments the
 * state (object) and the action
 */
/*
const initialState = {
numOfCakes: 10,
  numOfIceCreams: 20
}
*/

/**
 * We need to separete the reducers because have different
 * actions corresponding of the states of the store
 */

const initialCakeState = {
  numOfCakes: 10
}

const initialIceCreamState = {
  numOfIceCreams: 20
}
/*
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case BUY_CAKE: return {
      ...state,
      numOfCakes: state.numOfCakes - 1
    }
    case BUY_ICECREAM: return {
      ...state,
      numOfIceCreams: state.numOfIceCreams - 1
    }
    default: return state
  }
}
*/
  
const cakeReducer = (state = initialCakeState, action) => {
  switch(action.type) {
    case BUY_CAKE: return {
      ...state,
      numOfCakes: state.numOfCakes - 1
    }
    default: return state
  }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch(action.type) {
    case BUY_ICECREAM: return {
      ...state,
      numOfIceCreams: state.numOfIceCreams - 1
    }
    default: return state
  }
}

/**
 * The final step is the creation of the store that hold
 * the application state, next allows access to the state
 * via "getState()" and the state can be updated via
 * "dispatch(action)", register the listener via 
 * "suscriber(listener)" and finally when dispatch an action
 * from the store we need to call the "unsuscribe()" to
 * stop the listener of that store
 */


const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer
})
const store = createStore(rootReducer, applyMiddleware(logger))
console.log('Initial state', store.getState())
const unsubscribe = store.subscribe(() => {})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()

/**
 * The middleware provides a third-party extension point
 * between dispatching an action, and the moment it reaches
 * the reducer.
 * This functionality is used from loggin, crash reporting
 * or performing asynchronous tasks
 */