import React, {useContext} from 'react'
import CartItem  from './CartItem'
import "./carrito.css"
import CartContext from '../../context/CartContext'

const Carrito = () => {

    const { cart } = useContext(CartContext)
    // console.log(cart.length);

    return (
        <>
            <h1 className="cartTitle">Tu carrito</h1>
            <div className="carritoBox">
            {cart.length ? 
                <>
                {cart.map((carrito => [
                    <CartItem key={carrito.id} item={carrito.item} cantidad={carrito.cantidad}/>
                ]))
                }
                
                </>
                :
                <p>No hay items</p>
            } 
            </div>
        </>
    )
}

export default Carrito
