import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../profile/ProfilePatient.css";
import Accordion from "react-bootstrap/Accordion";

export const Comment = ({
    patient_Id,
    medicineId,
    pComment,
    pCommentDate,
    dComment,
    dCommentDate,
    medicineName,
}) => {
    return (
        <>
            <Accordion.Item eventKey="1">
                <Accordion.Header>COMMENTS</Accordion.Header>
                <Accordion.Body>
                    {<h5>medicineName:{medicineName}</h5>}
                    <p>P:{pComment}</p>
                    <p>D:{dComment}</p>
                </Accordion.Body>
            </Accordion.Item>
        </>
    );
};
