import React, {useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext'

const CartWidget = () => {

    const {quantity, total} = useContext(CartContext)

    return (
        <>
            {quantity > 0 
            && 
            <>
            <p className="listado">{total()}</p>
            <Link to="/cart">
            <button className="listado"><FontAwesomeIcon icon="shopping-cart" /></button>
            </Link>
            </>
            }          
        </>
    )
}

export default CartWidget

