import React from "react";
import { connect } from "react-redux";
import { buyCake, buyIceCream } from "../redux";

function ItemContainer(props) {
  return (
    <div>
      <h2>Item is a {props.cake ? 'cake' : 'ice cream'} - {props.item}</h2>
      <button onClick={props.buyItem}>Buy Item</button>
    </div>
  );
}

/**
 * In this case the own props of the container we can work
 * with the mapped state and make a logic to be reusable
 * only a one component and condition the functionality of
 * two different components
 */
const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numOfCakes
    : state.iceCream.numOfIceCreams;

  return {
    item: itemState,
  };
};

/**
 * Similarly on the mapStateToProps we can condition the
 * functionality from the dispatch function action
 */
const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());

  return {
    buyItem: dispatchFunction,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
