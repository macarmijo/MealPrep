import React from 'react'
import { Link } from 'react-router-dom';

const Item = ({title, image, id}) => {
    return (
            <article className="one-product">
                <h4>{title}</h4>
                <Link to={"/item/" + id}><img src={image} alt="beef" className="one-productImg"></img></Link>
                <Link to={"/item/" + id} className="moreInfo"> More info </Link>
            </article>
    )
}

export default Item
