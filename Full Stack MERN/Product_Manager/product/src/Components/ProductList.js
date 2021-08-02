import React from 'react'
import { Link } from '@reach/router';
import axios from 'axios';

const ProductList = (props) => {
    const { product } = props;
    const { removeFromDom } = props;
    console.log(product)
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
    }

    return (
        <div>
            {
                product.map((product, idx) =>
            {
                return( 
                    <p key={idx}>
                        <Link to={`/product/${product._id}`}>
                            {product.title}, {product.price}, {product.description}
                        </Link>
                        <br></br>
                        
                        <button onClick={(e)=>{deleteProduct(product._id)}}>
                    Delete
                </button>
                    </p>
                )
            })
            }
            </div>
            )
}
export default ProductList
    



