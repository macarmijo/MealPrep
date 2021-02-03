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
    const [cantItems, setCantItems] = useState(0)
    const [total, setTotal] = useState(0)
    const [idOrden, setIdOrden] = useState([])
    const [carritoEstado, setCarritoEstado] = useState(true);


    const addToCart = ({item, cantidad}) => {
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
    
    useEffect(() => {
        setTotal(cart.reduce((accumulator, currentValue) => accumulator + (currentValue.item.price * currentValue.cantidad), 0));
        setCantItems(cart.reduce((accumulator, currentValue) => accumulator + currentValue.cantidad, 0));
    }, [cart])
    
       
    return (
        <CartContext.Provider value={{
            addToCart, 
            isInCart, 
            idOrden, 
            setIdOrden, 
            carritoEstado, 
            setCarritoEstado, 
            deleteItem, 
            clearCart, 
            updateCantidad, 
            cantItems, 
            cart, 
            total
            }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartState
