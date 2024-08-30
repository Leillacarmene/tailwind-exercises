import React from 'react'
//import logo from "../src/assets/images/Screenshots/pine.jpg"

function Header() {
  return (
    
        <div className="shadow-md w-full fixed top-0 left-0">
           <div className="md:flex items-center justify-between bg-white py-3">
              <div className="">
                 {/* <img className="w-px"src={logo} alt="" /> */}
                 <h1 className=" text-blue-400 w-1">Leilla</h1>
              </div>
              <ul className="md:flex md:items-center left-6 pl-3 flex space-x-4 ml-2">
                 <a className="text-black-500 hover:text-blue-800" href="/home">
                    <li className="md:ml-8 text-xl">Home</li>
                 </a>
                 <a className="text-black-500 hover:text-blue-800" href="/about">
                    <li className="md:ml-8 text-xl">About</li>
                 </a>
                 <a className="text-black-500 hover:text-blue-800" href="/services">
                    <li className="md:ml-8 text-xl">Services</li>
                 </a>
                 <a className="text-black-500 hover:text-blue-800" href="/services">
                    <li className="md:ml-8 text-xl">Products</li>
                 </a>
                 <a className="text-black-500 hover:text-blue-800" href="/services">
                    <li className="md:ml-8 text-xl">Contact</li>
                 </a>
              </ul>
           </div>
        </div>
  )
}

export default Header;