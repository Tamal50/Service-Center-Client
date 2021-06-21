import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Homepage from './components/HomePage/Homepage';
import Login from './components/Log-in/Login';
import ProductList from './components/Dashboard/Admin/Layout/Sidebar/ProductList/ProductList';
import AddProduct from './components/Dashboard/Admin/Layout/Sidebar/AddProduct/AddProduct';
import OderList from './components/Dashboard/Admin/Layout/Sidebar/OderList/OderList';
import MakeAdmin from './components/Dashboard/Admin/Layout/Sidebar/MakeAdmin/MakeAdmin';
import firebase from "firebase/app";
import OderPage from './components/OderPage/OderPage';
import { createContext, useContext, useEffect, useState } from 'react';
import PrivateRoute from './components/Log-in/PrivateRoute';
import userObject from './utils/userObject';
import Loginbypass from './components/Log-in/Loginbypass';
import Oders from './components/Dashboard/User/Layout/Sidebar/Oders/Oders';
import ReviewPage from './components/Dashboard/User/Layout/Sidebar/ReviewPage/ReviewPage';
import Dashboard from './components/Dashboard/Dashboard';


export const UserContext = createContext(null)



function App() {
  const [logInUser,setLogInUser] = useState({});
    const [error, setError] = useState("");



  const generateToken = () => {
    const User = firebase.auth().currentUser
    console.log(User.email)
    User.getIdToken(false).then(token => {
        sessionStorage.setItem("token", token);
        localStorage.setItem("token", token);
        // // CHECK ADMIN
        // fetch(`http://localhost:5000/checkadmin?email=${User.email}`)
        // .then((res => res.json()))
        // .then(data => {
        //   if (data) {
        //     setUserIsAdmin(true);
        //     sessionStorage.setItem("Isadmin", true);
        //   } else {
        //     setUserIsAdmin(false);
        //     sessionStorage.setItem("Isadmin", false);
        //   }
        // })
        // .catch((err =>{
        //   setUserIsAdmin(false);
        // }))
        // //
    })
}

const handleAfterSignInOutResponse = async (user) => {
    if (user) {
        // IF Found User Data means Authenticated 
        console.log(user.displayName)
        setLogInUser(userObject(user));
        generateToken()
    } else {
        // User is signed out
        setLogInUser({});
    }
}

useEffect(() => {
  // onAuthStateChanged will executed in login and logout
  const unsubscribe = firebase.auth().onAuthStateChanged (handleAfterSignInOutResponse);
  // unsubscribe when unmounting the component
  return unsubscribe;
  // eslint-disable-next-line
}, []);

  return (
   <UserContext.Provider value={[logInUser, setLogInUser]}>
     <h2>email: {logInUser?.email}</h2>
    <Router>
      <Switch>
        <Route exact path="/">
          <Homepage></Homepage>
        </Route>
        <Loginbypass exact path="/login">
          <Login></Login>
        </Loginbypass>
        {/* <Route exact path="/admin">
          <Admin></Admin>
        </Route>
        <Route exact path="/user">
          <User></User>
        </Route> */}

        <PrivateRoute exact path="/dashboard">
          <Dashboard></Dashboard>
        </PrivateRoute>

        <PrivateRoute  exact path="/admin/ProductList">
        <ProductList></ProductList>
        </PrivateRoute>
        <PrivateRoute exact path="/admin/AddProduct">
        <AddProduct></AddProduct>
        </PrivateRoute>
        <PrivateRoute exact path="/admin/OderList">
          <OderList></OderList>
        </PrivateRoute>
        <PrivateRoute exact path="/admin/MakeAdmin">
          <MakeAdmin></MakeAdmin>
        </PrivateRoute>
        
        <PrivateRoute exact path="/user/OderList">
          <Oders></Oders>
        </PrivateRoute>
        <PrivateRoute exact path="/user/ReviewPage">
          <ReviewPage></ReviewPage>
        </PrivateRoute>

        <PrivateRoute exact path="/oder/:_id">
          <OderPage></OderPage>
        </PrivateRoute>
      </Switch>
    </Router>
    </UserContext.Provider> 
  );
}

export default App;
