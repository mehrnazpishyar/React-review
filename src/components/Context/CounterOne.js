import React from 'react'
import { useCount, useCounterActions } from './CounterProvider'

const CounterOne = () => {

const count = useCount();
const dispatch = useCounterActions();

  return (
    <div>
        <h2>count is {count}</h2>
        <button onClick={()=> dispatch({type:"add", value:1})}>Add One</button>
        <button onClick={()=> dispatch({type:"reset"})}>Reset</button>
        <button onClick={()=> dispatch({type:"decrement", value:1})}>Decrement</button>
    </div>
  )
}

export default CounterOne