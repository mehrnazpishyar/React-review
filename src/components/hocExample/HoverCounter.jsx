import React from 'react'
import withCounter from '../hoc/withCounter'

const HoverCounter = ({count, incrementCount}) => {

  return (
    <div>
        <h2 onMouseOver={incrementCount}>hovered {count} times</h2>
    </div>
  )
}

export default withCounter(HoverCounter,5) 