//https://localhost:7183/api/Comment/commentOnMedicine/11

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../profile/ProfilePatient.css";
//import "./PrescriptionList.css";
import Accordion from "react-bootstrap/Accordion";
import { Button } from "bootstrap";

export const CommentList = ({ patient_Id }) => {
    const [Comment, setComment] = useState([]);

    /* -------------Display PrescriptionList----------------- */
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
               `https://localhost:7183/api/Comment/commentOnMedicine/${patient_Id}`
            );
            const CommentData = await response.json();
            setComment(CommentData);
            console.log(CommentData);
        };
        fetchData();
    }, []);

    return <></>;
};
