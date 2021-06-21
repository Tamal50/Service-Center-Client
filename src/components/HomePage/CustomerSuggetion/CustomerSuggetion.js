import React from "react";
import image1 from '../../../image/1.jfif'
import image2 from '../../../image/6.png'
import image3 from '../../../image/Rc.png'

const TotalCustomer = () => {
  return (
    <main style={{  backgroundColor:'gray' }}>
      <div className="row p-5">
      <h1 style={{textAlign: 'center', color:'white'}}>All Computer & Tablet Services</h1>
      <h6 style={{textAlign: 'center', color:'white'}}>We can Solve your Hardware and Software Problems</h6>
      <div className="col-sm-4 ">
           <img className="ml-5 p-3" style={{ alignSelf: 'center',height:'200px'}} src={image1} alt=""/>
            <h2>Step 1.Tell us your Issue</h2>
            <h6>Help us detailing the device problem to get it working properly again.</h6>
      </div>
      <div className="col-sm-4">
           <img className="p-4 ml-5" style={{height:'200px'}} src={image2} alt=""/>
            <h2>Step 2.Get repair estimate</h2>
            <h6>Check the repair Price estimate.</h6>
      </div>
      <div className="col-sm-4 ">
           <img className="ml-5 p-2" style={{height:'200px'}} src={image3} alt=""/>
            <h2>Step 3.Bring or courier device</h2>
            <h6>Handover your device at our office or chooses device pickup, courier and a doorstep service.</h6>
      </div>
      </div>
    </main>
  );
};

export default TotalCustomer;
