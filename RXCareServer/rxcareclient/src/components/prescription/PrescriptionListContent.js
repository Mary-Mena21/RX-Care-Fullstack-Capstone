import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../profile/ProfilePatient.css";
//import "./PrescriptionList.css";
import Accordion from "react-bootstrap/Accordion";
//import { Button } from "bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';

export const PrescriptionListContent = ({ patient_Id }) => {
    console.log(patient_Id);
    var appUser = localStorage.getItem("app_user");
    var appUserObject = JSON.parse(appUser);
    console.log(appUserObject.type);
    const Type = appUserObject.type;
    console.log(Type);

    const [Prescription, setPrescription] = useState([]);
    //--------------Active/false------------------
/*     const [PrescriptionActive, setUpdatePrescriptionActive] = useState({
        id: 0,
        active: "inactive",
    }); */

    /* -------------Display PrescriptionList----------------- */
    const fetchData = async () => {
        const response = await fetch(
            `https://localhost:7183/api/prescription/Patient/${patient_Id}`
        );
        const PrescriptionListArray = await response.json();
        setPrescription(PrescriptionListArray);
        console.log(PrescriptionListArray);
    };
    useEffect(() => {
        fetchData();
    }, []);

    /* -------------Edit----------------- */
/*     const handleActiveButtonClick = (e) => {
        e.preventDefault();
        return fetch(
            `https://localhost:7183/api/prescription/UpdatePrescriptionByIdActive/${PrescriptionActive.id}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(PrescriptionActive),
            }
        )
            .then((response) => response.json())
            .then(() => {
                fetchData();
            });
    }; */

    //TODO: Update FORM
    return (
        <>
            {/* <div> */}
            {/*  <Accordion> */}
            {/*             <Accordion.Item eventKey="0">
                <Accordion.Header>PRESCRIPTIONS</Accordion.Header>
                <Accordion.Body> */}
            {Prescription.map((pres) => {
                // console.log(pres);
                // console.log(`${pres.adminsteredDose}`.length);
                //console.log(count(pres.adminsteredDose));
                return (
                    <>
                        <div>
                            {pres.active == "active" ? (
                                <div>
                                    {/* ----------------------------- */}
                                    <ListGroup>
                                        <ListGroup.Item action variant="info">                                            
                                            <div class="">
                                                {
                                                    pres.medicine
                                                        .medicineName
                                                }

                                                <img
                                                    src={
                                                        pres
                                                            .medicine
                                                            .imgUrl
                                                    }
                                                    style={{
                                                        height:
                                                            "30px",
                                                        width:
                                                            "auto",
                                                    }}
                                                />
                                        </div>
                                    </ListGroup.Item>
                                  </ListGroup>
                                    
                                    {/* ----------------------------- */}
                                </div>
                            ) : (
                                ""
                            )}
                        </div>
                    </>
                );
            })}
            {/* <p>{Prescription. dosage}</p> */}
            {/*                 </Accordion.Body>
            </Accordion.Item> */}

            {/*                     <Accordion.Item eventKey="1">
                        <Accordion.Header>COMMENTS</Accordion.Header>
                        <Accordion.Body>DEF</Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                        <Accordion.Header>REPORT</Accordion.Header>
                        <Accordion.Body>DEF</Accordion.Body>
                    </Accordion.Item>
                </Accordion> */}
            {/*       <br />
            </div> */}
        </>
    );
};
