import React from 'react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
import './navbar.css'
import DropdownNav from './DropdownNav';



const Navbar = ()  => {


    return (
        <>
        <nav>
            <div className="lista">
                <Link to="/" ><a className="listado">Home</a></Link>
                <Link to="/aboutMe"><a className="listado">About me</a></Link>
                <DropdownNav/>
                <CartWidget/>
            </div>
        </nav>
        </>
    )
}

export default Navbar
