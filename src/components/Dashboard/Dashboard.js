import React, { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import Admin from './Admin/Admin';
import User from './User/User';

const Dashboard = () => {

    const [logInUser,setLogInUser] = useContext(UserContext)
    const [isAdmin,setIsAdmin] = useState(false)
    useEffect(() => {
        fetch('https://pure-headland-64545.herokuapp.com/isAdmin', { 
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({ email: logInUser?.email })
        })
        .then(res => res.json())
        .then(data => setIsAdmin(data))
    })
    console.log("admin connect", isAdmin)
    return (
        <div>
             {isAdmin ? <div><Admin></Admin></div> : <div><User></User></div>}
            
        </div>
    );
};

export default Dashboard;