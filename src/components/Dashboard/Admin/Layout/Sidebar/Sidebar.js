import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        
        <div style={{height: '700px'}}>
            <h1>Sidebar</h1>
            <Link to="/admin/ProductList"  className="btn btn-danger mt-5" >Product List</Link>
            <Link to="/admin/AddProduct"  className="btn btn-danger mt-5">Add Product</Link>
            <Link to="/admin/OderList" className="btn btn-danger mt-5"> Oder list</Link>
            <Link to="/admin/MakeAdmin" className="btn btn-danger mt-5">Make admin</Link>
        </div>
       
    );
};

export default Sidebar;