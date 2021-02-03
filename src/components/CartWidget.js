import React, {useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import CartContext from './CartContext'

const CartWidget = () => {

    const {quantity} = useContext(CartContext)

    return (
        <>
            {quantity > 0 
            && 
            <>
            <p className="listado">{quantity}</p>
            <Link to="/cart">
            <button className="listado"><FontAwesomeIcon icon="shopping-cart" /></button>
            </Link>
            </>
            }          
        </>
    )
}

export default CartWidget

