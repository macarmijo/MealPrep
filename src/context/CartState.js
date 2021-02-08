import React, {useState} from 'react'
import CartContext from './CartContext'

const CartState = ({children}) => {

    const [cart, setCart] = useState([])

    function addToCart(item, cantidad) {
		setCart([
			...cart,
			{
                item: item,
				cantidad: cantidad
			}
        ])
    }
    const isInCart = (id)=> {
        let existe = cart.find(producto => producto.item.item.id === id)
        return existe?true:false
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
    
    function totalPrice(price, cantidad){
        let contador = 0
        cart.forEach(item => { contador = price * cantidad })
        return contador
    }
    function totalCarrito(price, cantidad){
        let cont = 0
        cart.forEach(carrito => (cont = cont + totalPrice(price, cantidad)))
        return cont
    }

    const total = () => {
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
            total,
            totalPrice,
            totalCarrito,
            quantity: cart.length
            }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartState
