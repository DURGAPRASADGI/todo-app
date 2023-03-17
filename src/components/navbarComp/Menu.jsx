import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div className='menuBlock'>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li>
                    <Link to="/add-emp">Add Employee</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Menu