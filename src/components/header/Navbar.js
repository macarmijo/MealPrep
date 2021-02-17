import React from 'react'
import CartWidget from './CartWidget'
import {Dropdown} from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom'
import './navbar.css'
import DropdownNav from './DropdownNav';


const Navbar = ()  => {

    const categorias = [{key: 'plantBased', description:'Plant Based'}, {key: 'proteinBased', description:'Protein Based'}, {key: 'dessert', description:'Dessert'}, {key: 'breakfast', description:'Breakfast'}]

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
