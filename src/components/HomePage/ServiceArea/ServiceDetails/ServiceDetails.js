import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ServiceDetails = (props) => {

    const service = props.service

    const loadProduct = (_id) => {
        fetch(`https://pure-headland-64545.herokuapp.com/product/${_id}`)
        .then(res => res.json())
        .then(data =>{
          console.log(data)
        })
      }
      

    return (
        <div className="col-sm-4 p-5">
            <img style={{height:'200px'}} src={service.url} alt=""/>
            <h6>{service.name}</h6>
            <h2>Price: ${service.price}</h2>
            <Link to={"/oder/"+service._id}> <button onClick={() => loadProduct(service._id)} className="btn btn-danger">Buy Now</button></Link>
        </div>
    
    );
};

export default ServiceDetails;