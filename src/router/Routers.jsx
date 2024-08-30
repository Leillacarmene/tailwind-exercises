import { Routes, Route } from "react-router-dom";
import Header from '../Header'
import Home from '../pages/Home';
import About from "../pages/About";
import Service from "../pages/Service";
import Product from "../pages/Product";
import Contact from "../pages/Contact";
const Routers =()=> {
  return (
    <Routes>
    <Route path="/header" element={<Header />} />
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/services" element={<Service/>}/>
      <Route path="/product" element={<Product/>} />
      <Route path="/contact" element={<Contact/>} />
    
    </Routes>
  )
}

export default Routers