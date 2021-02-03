import React, { useContext } from 'react'
import ItemCount from './ItemCount'
import './itemDetail.css'
import CartContext  from './CartContext'
import { Link } from 'react-router-dom';

const ItemDetail = ({item}) => {

    const { addToCart } = useContext(CartContext)
   
    return (
        <>
        <h1 className="titleDetail"> {item.title} </h1> 
        <div className="itemDetail">
            <section className="itemBox">
                <img src ={ item.imagen } alt="alt" className="itemImg"></img>  
                <p className="description">{item.description}</p>
            </section>
            <section className="itemBox">
            <h1> ${item.price} </h1>
            &nbsp;
            { item.stock ? <h4>{item.stock} in stock</h4> :<h1>Not in stock</h1> }
            &nbsp;
            
            <ItemCount 
                item={item}
                addToCart = {addToCart}
            /> 
            </section>  
        </div>
        </>
    )
}

export default ItemDetail
