import React, {  useState } from 'react';
import { useEffect } from 'react';
import Layout from '../../Layout';

const ProductList = () => {
    const [product, setProduct] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProduct(data));
    })



    

    const handleDelete = (id) => {
       fetch(`http://localhost:5000/delete/${id}`, {
           method: 'DELETE'
       })
       .then(res => res.json())
       .then(result =>{
           console.log(result)
       })
    }

    return (
       <Layout>

           {
               product.map(service =>(
                <div className="col-md-4 m-5">
                <img style={{height:'200px'}} src={service?.url} alt=""/>
                <h6>{service?.name}</h6>
                <h2>Price: $ {service?.price}</h2>
                <button onClick={() =>handleDelete(service._id)} className="btn btn-primary">Delete</button>
            </div>
               ))
           }

       </Layout>
    );
};

export default ProductList;