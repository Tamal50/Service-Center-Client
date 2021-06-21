import React, { useContext } from "react";
import { useEffect } from "react";
import './OderPage.css';
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";
import PaymentDetails from "./PaymentDetails/PaymentDetails";
import { UserContext } from "../../App";

const OderPage = (props) => {

  const history = useHistory();

  const { from } =  { from: { pathname: "/" } };
  const {_id} = useParams();
  const [oderProduct, setOderProduct] = useState([])
  useEffect(()=>{
    fetch(`http://localhost:5000/product/${_id}`)
    .then(res => res.json())
    .then(data => setOderProduct(data))
  })
  
  const [logInUser,setLogInUser] =useContext(UserContext);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    
    const oderDetails = {...logInUser , product: oderProduct , shipmentInfo: data , oderTime: new Date()}
    
    fetch('http://localhost:5000/oder', {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(oderDetails)
     })
     .then(res => res.json())
     .then(data => {
       if(data){
         alert("Your oder successfully please pay for confirm")
         history.replace(from);
       }
     })
    console.log(data)
  };

  return (
    <div className="row">
      <div
        style={{ backgroundColor: "#b2cb98", height: "700px" }}
        className="col-md-6 p-5"
      >
        <h1>Oder Details</h1>
        <h2 >{oderProduct.name}</h2>
        <h3 >Price: ${oderProduct.price}</h3>
        <img className="m-5" style={{height:'200px'}} src={oderProduct.url} alt=""/>

      </div>
      <div
        style={{ backgroundColor: "#d5c9eb", height: "700px" }}
        className="col-md-6"
      >
        <h1 className="p-5">Payment Information</h1>
    <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>

      <input defaultValue={logInUser?.name} {...register("name", { required: true })} placeholder="Your Name"/>
      {errors.name && <span className="error">This Name is required</span>}

      <input defaultValue={logInUser?.email} {...register("email", { required: true })} placeholder="Your E-mail"/>
      {errors.email && <span className="error">This Email is required</span>}

      <input {...register("address", { required: true })} placeholder="Your Address"/>
      {errors.address && <span className="error">This Address is required</span>}
      
      <input {...register("phone", { required: true })} placeholder="Your Phone"/>
      {errors.phone && <span className="error">This phone is required</span>}

      <input type="submit" />
    </form>
        
        <PaymentDetails></PaymentDetails>
      </div>
    </div>
  );
};

export default OderPage;
