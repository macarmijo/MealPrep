import React, { useEffect, useState } from 'react'
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { firestore } from '../../firebaseConfig'

const DropdownNav = () => {
    
    const [categorias, setCategorias] = useState([])

    useEffect(() => {
        const collection = firestore.collection('category')
        const query = collection.get()

        query
        .then(({docs}) => {
            setCategorias(docs.map(doc => ({
                id: doc.id, ...doc.data()
            }))) 
        })
        .catch((err)=>{
                console.log(err)
        })

        }, [])
        
    return (
        <>
            <Dropdown>
            <Dropdown.Toggle className="listado" variant="secondary" id="dropdown-basic">
                Meal Preps
            </Dropdown.Toggle>

            <Dropdown.Menu className="MenuListado">
                {categorias.map(categoria => {
                            return(
                            <Dropdown.Item className='categories' key={categoria.id}>
                            <Link to={'/category/' + categoria.key} className="cat">{categoria.description}</Link>
                            </Dropdown.Item>
                            )    
                        })                 
                    }
                <Dropdown.Item className="categories">
                <Link to="/ItemListContainer" className="cat">All</Link>
                </Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
        </>
    )
}

export default DropdownNav