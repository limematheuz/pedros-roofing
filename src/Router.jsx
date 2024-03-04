import React from "react";
import { Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
import ServicesPage from "./pages/ServicesPage/ServicesPage.jsx";
import ContactPage from "./pages/ContactPage/ContactPage.jsx";
import FreeInspectionPage from "./pages/FreeInspectionPage/FreeInspectionPage.jsx";
import FinancyPage from "./pages/FinancyPage/FinancyPage.jsx";

export default function Router() {
    return(
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/services" element={<ServicesPage/>}/>
            <Route path="/contact" element={<ContactPage/>}/>
            <Route path="/free-inspection" element={<FreeInspectionPage/>}/>
            <Route path="/financing-service" element={<FinancyPage/>}/>
        </Routes>
    )
}