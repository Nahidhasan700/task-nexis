import React from "react";
import logo from "../../assets/image/title.png";
import banner from "../../assets/image/banner.png";
import { Outlet } from "react-router-dom";
import './Main.css'


const main = () => {
  return (
    <div>
      <div className="container  ">
        <div className="  d-xxl-flex d-md-flex align-items-center">
          <div className=" me-5  ">
            <div className="img-fluid w-25"> <img src={logo} alt="" className="img-fluid " /></div>
            <div ><img src={banner} alt="" /></div>
           
          </div>

          <div className="mt-sd-0 mt-5">
          <div className=" shadow p-3 bg-white rounded mt- mt-md-0 ms-5">
            <Outlet></Outlet>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default main;
