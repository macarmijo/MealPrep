import React, {useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext'

const CartWidget = () => {

    const {quantity, totalItems} = useContext(CartContext)

    return (
        <>
            {quantity > 0 
            && 
            <>
            <p className="listado">{totalItems()}</p>
            <Link to="/cart">
            <button className="listado"><FontAwesomeIcon icon="shopping-cart" /></button>
            </Link>
            </>
            }          
        </>
    )
}

export default CartWidget

