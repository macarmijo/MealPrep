// CartContext.js con el context y su custom provider (Impórtalo en App.js)
// Al clickear comprar en ItemDetail se debe guardar en el CartContext el producto y su cantidad en forma de objeto { item: {} , quantity }
// Detalle importante: CartContext debe tener la lógica incorporada de no aceptar duplicados y mantener su consistencia.
// Métodos recomendados: 
// addItem(item, quantity) // agregar cierta cantidad de un ítem al carrito
// removeItem(itemId) // Remover un item del cart por usando su id
// clear() // Remover todos los items
// isInCart: (id) => true|false
import React, {useState, useEffect} from 'react'
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
    const isInCart = id => {
        let existe = cart.find(producto => producto.item.id === id)
        return existe?true:false
    }
    const deleteItem = id => {
        const nuevoCart = cart.filter(producto => producto.item.id !== id)
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
    
    const totalPrice = () => {
        let contador = 0
        cart.forEach(item => { contador = contador + (item.cantidad * item.price) })
        return contador
    }

    const total = () => {
        let contador = 0
        cart.forEach(item => { contador = contador + item.cantidad })
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
            quantity: cart.length
            }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartState
