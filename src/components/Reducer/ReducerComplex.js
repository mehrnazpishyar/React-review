import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 0,
};

const ReducerComplex = () => {
  // useReducer(reducer, initialState)
  // return : [count , dispatch]
  // reducer(state, action)

  // const [count, dispatch] = useReducer(reducer, initialState)
  // OR
  const [count, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "add":
        return { ...state, firstCounter: state.firstCounter + action.value };
      case "add2":
        return { ...state, secondCounter: state.secondCounter + action.value };
      case "reset":
        return initialState;
      case "decrement":
        return { ...state, firstCounter: state.firstCounter - action.value };
      case "decrement2":
        return { ...state, secondCounter: state.secondCounter - action.value };
      default:
        return state;
    }
  }, initialState);

  return (
    <div>
      <h2>count one is {count.firstCounter}</h2>
      <h2>count two is {count.secondCounter}</h2>
      <button onClick={() => dispatch({ type: "add", value: 1 })}>
        Add One
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "add2", value: 1 })}>
        Add One
      </button>
      <button onClick={() => dispatch({ type: "decrement2", value: 1 })}>
        Decrement
      </button>
    </div>
  );
};

export default ReducerComplex;
