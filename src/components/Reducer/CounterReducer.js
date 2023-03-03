import React, { useReducer} from "react";

const initialState = 0;

const CounterOne = () => {

// useReducer(reducer, initialState)
// return : [count , dispatch]
// reducer(state, action)


// const [count, dispatch] = useReducer(reducer, initialState)
// OR
  const [count, dispatch] = useReducer((state, action)=>{
    switch (action) {
        case "addOne":
          return state + 1;
        case "addFive":
          return state + 5;
        case "decrement":
          return state - 1;
        default:
          return state;
      }
  }, initialState);


  return (
    <div>
      <h2>count is {count}</h2>
      <button onClick={() => dispatch('addOne')}>Add One</button>
      <button onClick={() => dispatch('addFive')}>Add Five</button>
      <button onClick={() => dispatch('decrement')}>Decrement</button>
    </div>
  );
};

export default CounterOne;
