import React from 'react'
import { Link } from "react-router-dom"
import "./Navbar.css"

export default function Navbar({ setlogin }) {
  function logoutfun() {
    setlogin('')
  }
  return (
    <div className='navbar'>
      <Link to="/">Home</Link>
      <Link to="/addmovie">Add Movie</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <button onClick={logoutfun}>Logout</button>
    </div>
  )
}
