import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className="introHeader">
               <Link to="/aboutMe">
                <a className="khyl">Khyl Porcelli</a>
               </Link> 
            </div>
            <div className="header"> 
                <Navbar/>
            </div>
        </header>
    )
}

export default Header
