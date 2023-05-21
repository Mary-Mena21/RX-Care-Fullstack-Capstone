import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { Home } from "../home/Home";


export const UserViews = () => {
    return (
        <React.StrictMode>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Outlet />
                        </>
                    }
                >
                    <Route path="/" element={<Home />} />
                </Route>
            </Routes>
        </React.StrictMode>
    );
};
