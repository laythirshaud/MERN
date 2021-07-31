import React from 'react'
import { Link } from '@reach/router';

const ProductList = (props) => {

    const { product } = props;
    console.log(product)

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
                    </p>
                )}
                )
            }
        </div>
    )
}
export default ProductList