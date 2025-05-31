import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <ul className="navbar">
            <li className="element">
                <Link to="/" className='link'>Home</Link>
            </li>
            <li className="element">
                <Link to="/about" className='link'>About</Link>
            </li>
            <li className="element">
                <Link to="/service" className='link'>Service</Link>
            </li>
            <li className="element">
                <Link to="/contact" className='link'>ContactUs</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar