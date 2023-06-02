import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../profile/ProfilePatient.css";
//import "./PrescriptionList.css";
import Accordion from "react-bootstrap/Accordion";
import { Button } from "bootstrap";

export const CommentList = ({ patient_Id }) => {
    const [Comment, setComment] = useState([]);
    const [Medicine, setMedicine] = useState([]);
    console.log(patient_Id);
    /* -------------Display CommentList----------------- */
    //TODO: Solution for null comment : if (Comments == null) { return NotFound(); } added in CommentController
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                //`https://localhost:7183/api/Comment/commentOnMedicine/${patient_Id}`
                `https://localhost:7183/api/Comment/${patient_Id}`
                //`https://localhost:7183/api/Comment/commentOnMedicine/${patient_Id}}`
            );
            const CommentData = await response.json();
            setComment(CommentData);
            console.log(CommentData);
        };
        fetchData();
    }, []);

    /* -------------Display Medicine----------------- */
    // useEffect(() => {
    //     const fetchMedicineData = async () => {
    //         const response = await fetch(
    //             `https://localhost:7183/api/Comment/commentOnMedicine/${patient_Id}}`
    //         );
    //         const CommentData = await response.json();
    //         setMedicine(CommentData.medicine);
    //         console.log(CommentData.medicine);
    //     };
    //     fetchMedicineData();
    // }, []);
















    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await fetch(
    //             //`https://localhost:7183/api/Comment/commentOnMedicine/7`
    //             `https://localhost:7183/api/Comment/{patient_Id}`
    //         );

    //         // if (!response.ok) {
    //         //     reject(res);
    //         // } else {
    //             const CommentData = await response.json();
    //             setComment(CommentData);
    //             console.log(CommentData);
    //         // }
    //     };
    //     fetchData();
    // }, []);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const res = await fetch(
    //             `https://localhost:7183/api/Comment/commentOnMedicine/${patient_Id}`
    //         );

    //         const CommentData = await res.json();
    //         setComment(CommentData);
    //         console.log(CommentData);
    //         //if (!res.ok) return reject(res);

    //         //const contentType = res.headers.get(String);

    //         // if (contentType && contentType.indexOf() !== -1) {
    //         //     res.json().then((json) => {
    //         //         resolve(json);
    //         //     });
    //         // }
    //     };
    //     fetchData();
    // }, []);

    // const [Prescription, setPrescription] = useState([]);

    /* -------------Display PrescriptionList----------------- */
    //     useEffect(() => {
    //         const fetchData = async () => {
    //             const response = await fetch(
    //                 `https://localhost:7183/api/prescription/Patient/${patient_Id}`
    //             );
    //             const PrescriptionListArray = await response.json();
    //             setPrescription(PrescriptionListArray);
    //             console.log(PrescriptionListArray);
    //         };
    //         fetchData();
    //     }, []);

    return (
        <>
            <Accordion.Item eventKey="1">
                <Accordion.Header>COMMENTS</Accordion.Header>
                <Accordion.Body>
                    {Comment.map((comment) => {
                        return <>
                            <p>P:{comment.pComment }</p>
                            <p>D:{comment.dComment }</p>
                            </>;
                        })}
                        {/* DEF   { Comment.pComment} */}{" "}
                       {/*  <p>D:{Medicine.medicineName}</p>  */}
                </Accordion.Body>
            </Accordion.Item>
        </>
    );
};
