import React, {useState, useEffect} from 'react'
import {Dropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { getFirestore } from '../firebaseConfig';


const DropdownNav = () => {
    
    
    return (
        <>
            <Dropdown>
                <a className="listado"><Link to="/ItemListContainer">Meal Preps</Link>
                <Dropdown.Toggle className="flechaCateg"/>
                </a>

                <Dropdown.Menu className="MenuListado">
                   
                    <Dropdown.Item className="categories" >
                        <Link to={`/category/Breakfast`}><a>Breakfast</a></Link> 
                    </Dropdown.Item>
                    <Dropdown.Item className="categories">
                        <Link to={`/category/Dessert`}><a>Dessert</a></Link>
                    </Dropdown.Item>
                    <Dropdown.Item className="categories">
                        <Link to={`/category/PlantBased`}><a>Plant Based</a></Link>
                    </Dropdown.Item>
                    <Dropdown.Item className="categories"> 
                        <Link to={`/category/ProteinBased`}><a>Protein Based</a></Link> 
                    </Dropdown.Item>
        
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}

export default DropdownNav
