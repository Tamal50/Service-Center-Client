import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Navbar from "../../../HomePage/Home/Navbar/Navbar";


const AdminLayout = (props) => {
  return (
    <section>
      <Navbar></Navbar>
      <div className="row">
        <div style={{backgroundColor: '#5edcca'}} className="col-md-2 p-5">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-10 p-5">
          {props.children }

      </div>
        
      </div>
    </section>
  );
};

export default AdminLayout;
