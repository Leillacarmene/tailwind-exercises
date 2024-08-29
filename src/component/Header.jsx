import React from "react";
import logo from "../assets/images/logo2.png";

const Header = () => {
  return (
      <div className="shadow-md w-full fixed top-0 left-0">
         <div className="md:flex items-center justify-between bg-white py-3">
            <div className="w-6">
               <img className=""src={logo} alt="" />
               <h1 className="text-blue-400">Leilla</h1>
            </div>
            <ul className="md:flex md:items-center left-6 justify-around">
               <a className="text-black-500 hover:text-blue-800" href="home">
                  <li className="md:ml-8 text-xl">home</li>
               </a>
               <a className="text-black-500 hover:text-blue-800" href="about">
                  <li className="md:ml-8 text-xl">about</li>
               </a>
               <a className="text-black-500 hover:text-blue-800" href="services">
                  <li className="md:ml-8 text-xl">services</li>
               </a>
            </ul>
         </div>
      </div>
  );
};
export default Header;
