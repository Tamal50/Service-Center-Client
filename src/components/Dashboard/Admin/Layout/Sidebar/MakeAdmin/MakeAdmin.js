import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Layout from "../../Layout";

const MakeAdmin = () => {
  const [addAdmin, setAddAdmin] = useState({});
  const history = useHistory();

  const { from } =  { from: { pathname: "/" } };
  const handleOnChange = (e) => {
    const newForm = { ...addAdmin };
    newForm[e.target.name] = e.target.value;
    console.log(newForm);
    setAddAdmin(newForm);
    console.log(addAdmin);
  };

  const handleAddAdmin = (e) => {
    e.preventDefault();
    fetch("https://pure-headland-64545.herokuapp.com/addadmin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addAdmin),
    })
    .then(res => res.json())
          .then(result =>{
            if(result){
               
              alert("You added admin successfully")
              history.replace(from);

            }
          })
  };


  const [admin, setAdmin] = useState([]);
  useEffect(() =>{
    fetch('https://pure-headland-64545.herokuapp.com/admin')
    .then(res => res.json())
    .then(data => setAdmin(data));
  })


  return (
    <Layout>
      <div>
        <form onSubmit={handleAddAdmin}>
          <p>
            <span>Name : </span>
            <input
              onChange={handleOnChange}
              name="name"
              value={addAdmin.name}
            ></input>
          </p>
          <p>
            <span>Admin Email : </span>
            <input
              onChange={handleOnChange}
              name="email"
              value={addAdmin.email}
            ></input>
          </p>
          <button className="btn btn-primary"type="submit">ADD Admin </button>
        </form>
      </div>
      {/* <div className="p-5">
          <h1>Your Admin List</h1>
          <h3>{admin.email}</h3>
      </div> */}
    </Layout>
  );
};

export default MakeAdmin;
