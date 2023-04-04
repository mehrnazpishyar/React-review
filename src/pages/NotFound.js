import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
      <p>404
        <br />
        the page not found
      </p>
      <Link to="/">go to home page</Link>
    </>
  )
}

export default NotFound