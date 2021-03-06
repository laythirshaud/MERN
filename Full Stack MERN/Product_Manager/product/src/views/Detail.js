import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
const Detail= ({id}) => {
    const [product, setProduct] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" +id)
            .then(res => setProduct(res.data))
    }, [id])
    return (
        <>
        <div>
            <p>title: {product.title}</p>
            <p>price: {product.price}</p>
            <p>Description: {product.description}</p>
        </div>
        <Link to={"/product/" + product._id + "/edit"}>
    Edit
</Link>
        </>
    )
}
export default Detail