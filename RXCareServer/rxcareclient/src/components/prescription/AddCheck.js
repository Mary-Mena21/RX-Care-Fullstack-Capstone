import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
import "../profile/ProfilePatient.css";
//import "./PrescriptionList.css";
// import Accordion from "react-bootstrap/Accordion";
// import { Button } from "bootstrap";
// import Form from 'react-bootstrap/Form';



const [AdministeredDose, setAddAdministeredDose] = useState({
    //id: 0,
    day: "2023-06-05T22:53:06.492Z",
    prescriptionId: 0
});
/* --------------Add-AdministeredDose---------------- */
const fetchData = async (SendToAPI) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(SendToAPI),
    };
    console.log(fetchOptions);
    const response = await fetch(
        ` https://localhost:7183/api/AdminsteredDose/Add`,
        fetchOptions
    );
    navigate(`../patientsList/${patient_Id}`);
    const responseJson = await response.json();
    return responseJson;
};
/* ------------------------------ */
const submissionHandler = (event) => {
    event.preventDefault();
    fetchData(AdministeredDose);
};
// //TODO: implement Rest of Patient Form
/* ------------------------------ */