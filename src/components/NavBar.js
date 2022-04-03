import React from 'react'
import { Link } from "react-router-dom";
import image from '../assets/home-logo.png'

function NavBar() {
  return (
    <div>
        <Link to="/">
            <img src={image} alt='home'></img>
        </Link>
    </div>
  )
}

export default NavBar