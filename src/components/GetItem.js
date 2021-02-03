import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import ItemDetail from './ItemDetail'
import {firestore} from '../firebaseConfig';



const GetItem = () => {
    
    const [ productos, setProductos ] = useState()
    const { id } = useParams()

    useEffect(() => {

        const query = firestore.collection("items").doc(id).get()

        query.then((resultado) => {
            setProductos({id: resultado.id, ...resultado.data()})
        })
    },[id])

    return (
        <div>
            { productos 
            ? <ItemDetail
              key={productos.id}
              item = {productos}
              />
            : <h1 className="loading">Loading...</h1> 
            }
        </div>
    )
}

export default GetItem
