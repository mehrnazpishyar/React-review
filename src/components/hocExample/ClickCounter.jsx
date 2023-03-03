import React from 'react'
import withCounter from '../hoc/withCounter'

const ClickCounter = ({count , incrementCount}) => {

  return (
    <div>
        <h2 onClick={incrementCount}>clicked {count} times</h2>
    </div>
  )
}

export default withCounter(ClickCounter,10) 