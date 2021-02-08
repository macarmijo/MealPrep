import React, {useContext} from 'react'
import CartContext from '../../context/CartContext'

const CartItem = ({item, cantidad}) => {

    const {id, title, imagen, price, stock}=item
    const {deleteItem, updateCantidad}= useContext(CartContext)

    return (
         <>
        <table>
        <thead>
            <th className="carritoTitle">{item.item.title}</th>
        </thead>
        <tbody className="carritoColumns">
            <tr>
            <td><img src={`${item.item.imagen}`} alt={`${item.item.title}`} className="imgCarrito"></img></td>
            <td>
                <button className="buttonProd" onClick={()=> updateCantidad(item.item.id, item.cantidad-=1)} disabled={item.cantidad <= 1}> - </button>
                &nbsp;Cantidad:
               &nbsp;
                {item.cantidad}
                <button className="buttonProd" onClick={()=> updateCantidad(item.item.id, item.cantidad+=1)} disabled={item.cantidad >= item.item.stock}> + </button>
            </td>
            <td><button className="buttonProd" onClick={()=> deleteItem(item.item.id)} > Delete </button></td>
            <td>${item.item.price}</td>
            </tr>
        </tbody>
        <tfoot>
            <tr className="carritoFoot">
            <th scope="row" colspan="2">&nbsp;&nbsp;&nbsp;Total</th>
            <td colspan="2">$ {item.item.price * item.cantidad }</td>
            </tr>
        </tfoot>
        </table>
        </>

    )
}

export default CartItem