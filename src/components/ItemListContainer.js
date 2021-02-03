import React, { useState, useEffect } from 'react'
import ItemList from './ItemList'
import {useParams} from 'react-router-dom'
import { firestore } from "../firebaseConfig";


const ItemListContainer = ({greeting}) => {

    const [items, setItems] = useState([]);
    const {id, categoryId} = useParams();

    useEffect(() => {


        let query;
        categoryId?
            query = firestore.collection("items").where("categoryId","==", categoryId).get() :
            query = firestore.collection("items").get()

        query.then(({docs}) =>{
            setItems(docs.map( doc => ({id: doc.id, ...doc.data()})))
        })
    }, [categoryId]);

    return (
        <div className="itemList">
        {id ? <h1>{id}</h1>
        :<h1>{greeting}</h1>  
        } 
          {items.length > 0 
          ? <ItemList product = { items } /> 
          : <h1 className="loading">Loading...</h1>}
      </div>
    )
}

export default ItemListContainer

