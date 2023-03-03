import React from 'react'
import { useCount, useCounterActions } from './CounterProvider'

const CounterOne = () => {

const count = useCount();
const {addFive, addOne,decrement} = useCounterActions();

  return (
    <div>
        <h2>count is {count}</h2>
        <button onClick={addOne}>Add One</button>
        <button onClick={addFive}>Add Five</button>
        <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default CounterOne