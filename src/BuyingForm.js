import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import CartContext  from "./context/CartContext";
import { firestore } from "./firebaseConfig";
import firebase from 'firebase/app';
import '@firebase/firestore';
import './buyingForm.css';


const BuyingForm = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const { cart, totalCarrito, clearCart } = useContext(CartContext);

    const Order = (e) => {
        e.preventDefault();
        const db = firestore;
        const orders = db.collection("orders");
        const totalPrice = totalCarrito();
        const order = {
            buyer: {name, phone, email},
            items: cart,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: totalPrice,
            };
        console.log(order);
        
        orders.add(order)
        // .then(({ id }) => {
        //   alert("order number:" + id)
        // })
        .then((response)=> {
            console.log(response)
        })
        // .then(() => {
        //     clearCart();
        //     setName("");
        //     setEmail("");
        //     setPhone("");
        // })
        .catch( err => {
          console.log(err)
        })
    }


    return (
        <div>
        <form className="form-firebase">
          <h2>Datos de compra</h2>
          <ul className="flex-outer">
            <li>
              <label htmlFor="first-name">Full name: </label>
              <input
                type="text"
                id="first-name"
                placeholder="Nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </li>
            <li>
              <label htmlFor="email">Email: </label>
              <input
                type="email"
                id="email"
                placeholder="example@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </li>
            <li>
              <label htmlFor="phone">Phone: </label>
              <input
                type="tel"
                id="phone"
                placeholder="Phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </li>
  
            <Link to="/">
              <button className="firebase-button" type="submit" onClick={Order}>
                Comprar
              </button>
            </Link>
          </ul>
        </form>
      </div>
    )
}

export default BuyingForm