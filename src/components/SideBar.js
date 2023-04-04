import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
<aside>
    <ul>
        <li>
            <Link to="/profile/dashboard">dashboard</Link>
        </li>
        <li>
            <Link to="/profile/downloads">downloads</Link>
        </li>
    </ul>
</aside>
  )
}

export default SideBar