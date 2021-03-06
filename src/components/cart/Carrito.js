import React, {useContext} from 'react'
import CartItem  from './CartItem'
import "./carrito.css"
import { Link } from 'react-router-dom';
import CartContext from '../../context/CartContext'

const Carrito = () => {


    const { cart, totalCarrito, clearCart } = useContext(CartContext)
    console.log(cart);

    const clear = () => {
        const confirma = prompt('Confirma que quiere eliminar TODOS los productos de su carrito?: si/no')
        if(confirma === 'si'){
            alert('Su carrito ha sido eliminado con éxito!')
            return clearCart()
        }
    }


    return (
        <>
            <h1 className="cartTitle">Tu carrito</h1>
            {cart.length ?
                <> 
                <div className="carritoBox">
                <table>
                    {cart.map((carrito => [
                        <CartItem key={carrito.id} item={carrito.item}/>
                    ]))
                    }
                </table>
                <tfoot>
                <tr>
                    <td className="hidden-xs text-center">
                        <strong className="totalCarrito">Total: ${totalCarrito()}</strong>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Link to="/ItemListContainer" className="btn btn-warning">
                        Seguir Comprando
                        </Link>
                    </td>

                    <td>
                        <Link to="/" onClick={clear} className="btn btn-danger">
                        Reiniciar Carrito
                        </Link>
                    </td>
                    <td>
                        <Link to="/BuyingForm" className="btn btn-success btn-block">
                        Iniciar compra 
                        </Link>
                    </td>
                </tr>
                </tfoot>
                </div>       
                </>
                :
                <div className="totalCarrito">
                    <p>su carrito está vacío !</p> 
                </div>  
            } 
        </>
    )
}

export default Carrito
