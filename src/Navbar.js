import React from 'react'
import logo from "./mainlogo.png"
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/"><img src={logo} alt="img" /></Link></li>
      </ul>
      <Link to="/About">
        <p>About</p>
      </Link>

    </nav>
  )
}
