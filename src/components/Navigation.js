import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
          <nav>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/about-us">about-us</Link>
        </li>
      </ul>
    </nav>
    </div>
  )
}

export default Navigation