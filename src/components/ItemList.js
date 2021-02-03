import React from 'react'
import Item from './Item'

const ItemList = ({ product }) => {

    return (
        <section className="products-container">
            { product.map( p => 
                <Item 
                    key={p.id}
                    id={p.id}
                    title={p.title}
                    image={p.imagen}
                />   
            )}

        </section>
    )
}

export default ItemList