import React, {  useContext, useState } from 'react';
import Layout from '../../Layout';
import { useEffect } from 'react';
import { UserContext } from '../../../../../../App';


const Oders = () => {
  const [logInUser,setLogInUser] =useContext(UserContext);
    const [oder , setOder] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/oderDetails?email='+logInUser.email )
        .then(res => res.json())
        .then(data => setOder(data));
    }, [])

    return (
        <Layout>
                        <h1>You have : {oder.length}  Oder</h1>

              {
               oder.map(oderDetails =>(
                <div className=" m-5">
                <h3>Oder Time: {oderDetails?.oderTime}</h3>
                <h3>Name: {oderDetails?.name}</h3>
                <h3>Oder email: {oderDetails?.email}</h3>
                <h3>Oder phone: {oderDetails?.shipmentInfo.phone}</h3>
                <h3>Oder Address: {oderDetails?.shipmentInfo.address}</h3>                
                <h2>Product Name: {oderDetails?.product?.name}</h2>
                <h2>Price: $ {oderDetails?.product.price}</h2>
            </div>
               ))
           }
        </Layout>
    );
};

export default Oders;