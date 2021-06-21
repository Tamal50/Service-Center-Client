import React, { useContext } from 'react';
import Layout from '../../Layout';
import { useForm } from 'react-hook-form';
import './ReviewPage.css'
import { UserContext } from '../../../../../../App';


const Oders = () => {
    const [logInUser,setLogInUser] =useContext(UserContext);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    fetch('http://localhost:5000/review', {
        method: 'POST',
        headers: {
          "Content-Type": 'application/json'
        },
        body: JSON.stringify(data)
       })
       .then(res => res.json())
       .then(data => {
         if(data){
           alert("Thank you for your review")
         }
       })
    
    
    console.log(data)};
  return (
    <Layout>
        <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
      <input     defaultValue={logInUser?.name}  type="text" placeholder="Name" {...register("Name", {required: true, maxLength: 80})} />
      <input type="text" placeholder="Review" {...register("Review", {required: true,  maxLength: 500})} />

      <input type="submit" />
    </form>
    </Layout>
  );

}
export default Oders;