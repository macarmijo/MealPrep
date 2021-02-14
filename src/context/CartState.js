import React, {useState} from 'react'
import CartContext from './CartContext'

const CartState = ({children}) => {

    const [cart, setCart] = useState([])

    function addToCart(item, cantidad) {
		setCart([
			...cart,
			{
                item: item,
				cantidad: item.cantidad
			}
        ])
    }
    const isInCart = (id)=> {
        let existe = cart.find(producto => producto.item.item.id === id)
        return existe
    }

    function deleteItem(id){
        const nuevoCart = cart.filter(producto => producto.item.item.id !== id)
        setCart(nuevoCart)
    }
    const clearCart = () =>{
        setCart([])
    }

    const updateCantidad = (id, cantidad) =>{
        const oldCart = cart
        const newCart = oldCart.map(p => {
            if(p.item.id === id){
                p.cantidad = cantidad
            }
            return p
        })
        setCart( newCart )
    }
    
    function subtotalPrice(price, cantidad){
        let contador = 0
        cart.forEach(item => { contador = price * cantidad })
        return contador
    }

    function totalCarrito(){
        let cont = 0
        const cartPrice = cart.map(p => p.item.item.price * p.item.cantidad) 

        cartPrice.forEach(subtotal => {cont = cont + subtotal})
        return cont
    }

    const totalItems = () => {
        let contador = 0
        cart.forEach(item => { contador = contador + (item.item.cantidad) })
        return contador
    }
      
    return (
        <CartContext.Provider value={{
            addToCart, 
            isInCart, 
            deleteItem, 
            clearCart, 
            updateCantidad,  
            cart,
            totalItems,
            subtotalPrice,
            totalCarrito,
            quantity: cart.length
            }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartState
