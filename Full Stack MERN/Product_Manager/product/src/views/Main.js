import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductForm from '../Components/ProductForm';
import ProductList from '../Components/ProductList';
const Main =() => {
    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
            .then(res=>{
                setProduct(res.data);
                console.log(res.data);
                setLoaded(true);
            });
    },[])
    return (
        <div>
           <ProductForm/>
           <hr/>
           {loaded && <ProductList product={product}/>}
        </div>
    )
}
export default Main

