import React, {  useState } from 'react';
import Layout from '../../Layout';
import { useEffect } from 'react';

const OderList = () => {

    const [oder , setOder] = useState([])
    
    useEffect(()=>{
        fetch('https://pure-headland-64545.herokuapp.com/adminOderDetails')
        .then(res => res.json())
        .then(data => setOder(data));
    }, [])

    return (
        <Layout>
               <center> <h1>You have : {oder.length}  Oder</h1></center>                
                <div className="row">   
      {oder.map((oder) => (
        <div class="card col-5 m-5">
          <div className="row">
          <div class="col-4">
            <center><img style={{height: "100px" , marginTop: "30px"}} src={oder?.product.url} alt="..."></img></center>
          </div>
          <div class="col-8">
            <div class="card-body">
              <h5 class="card-title">{oder?.product?.name}</h5>
              <h5 class="card-title">Price : ${oder?.product?.price}</h5>
              <p class="card-title">Odered email : {oder?.email}</p>
              <p class="card-text">Oder Time : {oder?.oderTime}</p>
            </div>
            </div>
          </div>
      </div>
      ))}
    </div>
        </Layout>
    );
};

export default OderList;