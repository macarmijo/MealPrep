import React, {useContext} from 'react'
import CartContext from './CartContext'

const CartItem = ({item, cantidad}) => {

    const {id, title, imagen, price, stock}=item
    const {deleteItem, updateCantidad}= useContext(CartContext)

    return (
         
        <table>
        <thead>
            <th className="carritoTitle">{title}</th>
        </thead>
        <tbody className="carritoColumns">
            <tr>
            <td><img src={`${imagen}`} alt={`${title}`} className="imgCarrito"></img></td>
            <td>
                <button className="buttonProd" onClick={()=> updateCantidad(id, cantidad-=1)} disabled={cantidad <= 1}> - </button>
                &nbsp;Cantidad:
               &nbsp;
                {cantidad}
                <button className="buttonProd" onClick={()=> updateCantidad(id, cantidad+=1)} disabled={cantidad >= stock}> + </button>
            </td>
            <td><button className="buttonProd" onClick={()=> deleteItem(id)} > Delete </button></td>
            </tr>
        </tbody>
        <tfoot>
            <tr className="carritoFoot">
            <th scope="row" colspan="2">Total</th>
            <td colspan="2">$ {price *cantidad }</td>
            </tr>
        </tfoot>
        </table>

    )
}

export default CartItem