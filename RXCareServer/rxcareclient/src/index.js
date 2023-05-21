import React from "react";
//import ReactDOM from "react-dom/client";
import "./index.css";
//import reportWebVitals from "./reportWebVitals";
import { RXCare } from "./RXCare";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";



const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <BrowserRouter>
        <RXCare />
    </BrowserRouter>
);