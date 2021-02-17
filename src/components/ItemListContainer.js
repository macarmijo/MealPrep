import React, { useState, useEffect } from 'react'
import ItemList from './ItemList'
import {useParams} from 'react-router-dom'
import { firestore } from "../firebaseConfig";


const ItemListContainer = ({greeting}) => {

    const [items, setItems] = useState([]);
    const { categoryId } = useParams();
  
    useEffect(() => {

        let query;
        categoryId?
            query = firestore.collection("items").where("categoryId","==", categoryId).get():
            query = firestore.collection("items").get();

        query.then(({docs}) =>{
            setItems(docs.map( doc => ({id: doc.id, ...doc.data()})))
        })
    });

    return (
        <div className="itemList">
        {categoryId ? 
        <>
        <ItemList product = { items } /> 
        </>
        :<><h1>{greeting}</h1> 
        <ItemList product = { items } /> </> 
        } 
      </div>
    )
}

export default ItemListContainer