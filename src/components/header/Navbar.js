import React from 'react'
import CartWidget from './CartWidget'
import { Link, NavLink } from 'react-router-dom'
import './navbar.css'
import DropdownNav from './DropdownNav';


const Navbar = ()  => {

    return (
        <>
        <nav>
            <div className="lista">
                <Link to="/" className="listado">Home</Link>
                <Link to="/aboutMe" className="listado">About Me</Link>
                <DropdownNav/>
                <CartWidget/>
            </div>
        </nav>
        </>
    )
}

export default Navbar
