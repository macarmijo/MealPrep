import React, {useContext, useState, useEffect} from 'react'
import { useParams } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import CartContext from './CartContext'

const CartWidget = () => {

    const { cantItems } = useContext(CartContext);

    return (
        <>
            {
            cantItems > 0 
            && 
            <a className="listado">
                <p>{cantItems}</p>
            </a>
            }
            <Link to="/cart">
                <button className="listado"><FontAwesomeIcon icon="shopping-cart" /></button>
            </Link>
        </>
    )
}

export default CartWidget

