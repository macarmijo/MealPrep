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
    const [confirmEmail, setConfirmEmail] = useState("");
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
        // console.log(order);
        
        orders.add(order)
        .then(({ id }) => {
          alert("Success! your order number is:" + id)
        })
        // .then((response)=> {
        //     console.log(response)
        // })
        .then(() => {
            clearCart();
            setName("");
            setEmail("");
            setPhone("");
        })
        .catch( err => {
          console.log(err)
        })
    }

    const mailConfirm = () =>{
      if(email !== "" && email === confirmEmail){
        return true
      }else{
        return false
      }
    }


    return (
        <div className="formBox">
        {cart.length > 0 ? (
          <form className="form">
          <h2>Datos de compra</h2>
          <ul>
            <li>
              <label>Full name </label>
              <input
                type="text"
                id="name"
                placeholder="Nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </li>
            <li>
              <label>Email </label>
              <input
                type="email"
                id="email"
                placeholder="example@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </li>
            <li>
              <label>Confirm Email </label>
              <input
                type="email"
                id="email"
                placeholder="example@email.com"
                value={confirmEmail}
                onChange={(e) => setConfirmEmail(e.target.value)}
              />
            </li>
            <li>
              <label>Phone </label>
              <input
                type="tel"
                id="phone"
                placeholder="Phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </li>
            
            <Link to="/">
              <button disabled={!mailConfirm()} className="formButton" type="submit" onClick={Order}>
                Comprar
              </button>
            </Link>
          </ul>
        </form>
        ) : (
          <Link to="/ItemListContainer" className="btn btn-warning">
            Seguir Comprando
          </Link>
        )
        }
      </div>
    )
}

export default BuyingForm