import { Route, Routes } from "react-router-dom";
import "./RXCare.css";
import React  from 'react';
//import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register";
import { NavBar } from "./components/nav/NavBar";
import { ApplicationViews } from "./components/views/ApplicationViews";
import { Authorized } from "./components/views/Authorized";
import { Login3D } from "./components/auth/Login3D";
import { Login } from "./components/auth/Login";
import { Navbar2 } from "./components/navbar/Navbar2";
import { Footer } from "./components/footer/Footer";

export const RXCare = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/login3d" element={<Login3D />} />
            <Route path="/register" element={<Register />} />
            <Route
                path="*"
                element={
                    <Authorized>
                        <>
                        <Navbar2 />  
                        {/* <NavBar />  */}
                            <ApplicationViews />
                            <Footer />
                        </>
                    </Authorized>
                }
            />
        </Routes>
    );
};
