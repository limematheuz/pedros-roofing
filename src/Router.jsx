import React from "react";
import { Routes, Route} from "react-router-dom";
import Home from "./pages/HomePage/HomePage.jsx";
import Services from "./pages/ServicesPage/ServicesPage.jsx";
import Contact from "./pages/ContactPage/ContactPage.jsx";

export default function Router() {
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/services" element={<Services/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
    )
}