import React from 'react'
import CartWidget from './CartWidget'
import {  NavLink } from 'react-router-dom'
import './navbar.css'
import DropdownNav from './DropdownNav';


const Navbar = ()  => {


    return (
        <>
        <nav>
            <div className="lista">
                <NavLink to="/" className="listado">Home</NavLink>
                <NavLink to="/aboutMe" className="listado">About Me</NavLink>
                <DropdownNav/>              
                <CartWidget/>
            </div>
        </nav>
        </>
    )
}

export default Navbar
