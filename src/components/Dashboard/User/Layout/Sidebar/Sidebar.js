import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        
        <div style={{height: '700px'}}>
            <h1>Sidebar</h1>
            <Link to="/user/OderList" className="btn btn-danger m-5"> Oders</Link>
            <Link to="/user/ReviewPage" className="btn btn-danger m-5">Review</Link>

        </div>
       
    );
};

export default Sidebar;