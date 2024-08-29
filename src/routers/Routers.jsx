import { Routes, Route } from "react-router-dom";
import Home from '../pages/home';
import Header from "../component/Header";




const Routers = () => {
    return(
        <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/header" element={<Header />} />
        </Routes>
    )
}
export default Routers;
