import React, { useState, useEffect } from 'react';
import ServiceDetails from './ServiceDetails/ServiceDetails';



const Service = (props) => {


    const [product, setProduct] = useState([]);
    useEffect(()=>{
        fetch('https://pure-headland-64545.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProduct(data));
    })


    return (
      <section>
            <div className="mt-5">
            <h1 style={{color: 'red', textAlign: 'center'}}>Choose your service</h1>            
        </div>
         <div className="d-flex justify-content-center">
            <div className="row mt-5">
                {
                   product.map(service => <ServiceDetails service={service} ></ServiceDetails>)
                }
            </div>
            
      
        </div>
        
      </section>
    );
};

export default Service;