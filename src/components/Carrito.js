import React, {useContext} from 'react'
import CartContext from './CartContext'
import CartItem  from './CartItem'
import "./carrito.css"


const Carrito = () => {

    const { cart } = useContext(CartContext)

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
