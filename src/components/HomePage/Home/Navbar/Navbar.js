import React, { createContext, useContext } from "react";
import { Link } from "react-router-dom";
import firebase from "firebase/app";
import { UserContext } from "../../../../App";
import { useState } from "react";


const Navbar = () => {

  const [logInUser,setLogInUser] =useContext(UserContext);
  const handleLogOut = () => {
    firebase.auth().signOut()
    sessionStorage.removeItem('token')
  }
console.log(logInUser)
  let button 
  if(logInUser.name){
    button = <button href="/" onClick={handleLogOut} class="btn btn-primary">Log out</button>
  }else{
    button = <Link to="/login"><button class="btn btn-primary">Login</button></Link>
  }
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light">

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto  mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link mr-5 active" aria-current="page" href="/">Home</a>
        </li>

        <Link to="/dashboard"><li class="nav-item">
          <a class="nav-link mr-5">Dashboard</a>
        </li></Link>
        <li class="nav-item">
          {button}
        {/* {
          logInUser ? 
          <button onClick={handleLogOut} class="btn btn-primary">Log out</button> : <Link to="/login"><button class="btn btn-primary">Login</button></Link>
        } */}
        </li>
       
      </ul>    
    </div>
</nav>
    </div>
  );
};

export default Navbar;
