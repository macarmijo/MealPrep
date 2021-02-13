import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import CartContext from '../context/CartContext'


const ItemCount = ({item, addToCart}) => {

    const [ contDetail , setContDetail ] = useState(1)
    const name = item.title
    const { isInCart } = useContext(CartContext);
    const existeItem = isInCart(item.id);

    const aumentarCont = () => {
        if (contDetail < item.stock){
            setContDetail(contDetail + 1)
        }else{
            setContDetail( item.stock )
        }        
    }
    const restarCont = () => {
        if(contDetail > 1){
            setContDetail(contDetail - 1)
        }
    }

    const onAdd = () => {
        const add = addToCart({ item: item, cantidad: contDetail})
        return  add
    }
    
    return (
        <>
            { existeItem ?
            <>
            <h4>{"agregaste"+ " " + contDetail + " " + name + " al carrito" }</h4>
            <Link to="/cart">
                <button className="addToCart">ir al carrito</button>
            </Link>
            </>
            :
            <>
            <div className="contador">
            <button onClick={restarCont} className="buttonProd">-</button>
            <p>{contDetail}</p>
            <button onClick={aumentarCont} className="buttonProd">+</button>
            </div>    
            <div>
                <button className="addToCart" 
                onClick={onAdd}>
                    add to cart</button>
            </div>
            </>}
        </>
    )
}

export default ItemCount
