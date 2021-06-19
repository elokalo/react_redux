import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux";

function HookCakeContainer() {
  /**
   * useSelector Hook is the translation of the
   * mapStateToProps function, this hook return a value
   */
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  /**
   * useDispatch is a hook to access to redux dispatch an
   * action function
   */
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Hook - Number of cakes - {numOfCakes} </h1>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  );
}

export default HookCakeContainer;
