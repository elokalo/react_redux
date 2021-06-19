import React from 'react'
import {connect} from 'react-redux'
import {buyCake} from '../redux'

/**
 * React Redux simple example
 */
function CakeContainer(props) {
    return (
        <div>
           <h1>Number of cakes - {props.numOfCakes}</h1>
           <button onClick={props.buyCake}>Buy Cake</button> 
        </div>
    )
}

/**
 * This function gets a redux state as a parameter and
 * return an object
 */
const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

/**
 * This function gets the redux dispatch method as a
 * parameter and again returns an object
 */
const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

/**
 * This function is the connection with the component with
 * redux store and map the state of the store in props of
 * the component will be connected, in this case we need
 * to map the state and the dispatch function action
 */
export default connect(
    mapStateToProps
    , mapDispatchToProps)
(CakeContainer)
