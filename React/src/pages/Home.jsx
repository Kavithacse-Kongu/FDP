import React from 'react'
import { Link } from 'react-router-dom'
import '../components/Navbar.css'
const Home = ({name}) => {
  return (
    <div>
        <h1>Welcome {name}</h1>
        <div className="align">
        <Link to='/state'>Usestate Example</Link>
        <Link to='/form'>Controlled Form</Link>
        <Link to='/effect'>useEffect Example</Link>
        <Link to='/ref'>useRef Example</Link>
        <Link to='/reducer'>useReducer Example</Link>
        </div>
    </div>
  )
}

export default Home //rafce
// react arrow function component export
