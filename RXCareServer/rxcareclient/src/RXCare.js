import { Route, Routes } from "react-router-dom";
import "./RXCare.css";
import React  from 'react';
import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register";
import { NavBar } from "./components/nav/NavBar";
import { ApplicationViews } from "./components/views/ApplicationViews";
import { Authorized } from "./components/views/Authorized";

export const RXCare = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
                path="*"
                element={
                    <Authorized>
                        <>
                            <NavBar />
                            <ApplicationViews />
                        </>
                    </Authorized>
                }
            />
        </Routes>
    );
};
