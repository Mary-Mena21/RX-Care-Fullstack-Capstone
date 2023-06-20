import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../profile/ProfilePatient.css";
import "../prescription/PrescriptionList.css";
import loading from "../images/loading.gif";

import Accordion from "react-bootstrap/Accordion";
import { PieChart } from "react-minimal-pie-chart";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { badge } from "../images/badge.gif";

export const PrescriptionCheckContent = ({ patient_Id }) => {
    const [Prescription, setPrescription] = useState([]);
    const [Administered, setAdministered] = useState([]);

    //--------------User Type------------------
    var appUser = localStorage.getItem("app_user");
    var appUserObject = JSON.parse(appUser);
    console.log(appUserObject.type);
    const Type = appUserObject.type;
    console.log(Type);

    /* -------------Display AdministeredDoseList----------------- */
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `https://localhost:7183/api/prescription/GetPrescriptionDosesByPatientId/${patient_Id}`
            );
            const AdministeredDoseArray = await response.json();
            setAdministered(AdministeredDoseArray);
        };
        fetchData();
    }, []);

    /* -------------Display PrescriptionList----------------- */
    const fetchDataPrescriptionList = async () => {
        const response = await fetch(
            `https://localhost:7183/api/prescription/GetPrescriptionDosesByPatientIdAll/${patient_Id}`
        );
        const PrescriptionListArray = await response.json();
        setPrescription(PrescriptionListArray);
        console.log(PrescriptionListArray);
        for (const Prescription of PrescriptionListArray) {
            console.log(Prescription.adminsteredDose.length);
        }
    };

    useEffect(() => {
        fetchDataPrescriptionList();
    }, []);
    //TODO: Update FORM

    //-------------------------------------------------------------

    const [AdministeredDose, setAddAdministeredDose] = useState({
        //id: 0,
        day: new Date(),
        prescriptionId: 0,
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
        await fetch(
            ` https://localhost:7183/api/AdminsteredDose/Add`,
            fetchOptions
        )
            .then((response) => response.json())
            .then(() => {
                fetchDataPrescriptionList();
            });
    };
    /* --------------Modal---------------- */

    // const [modalShow, setModalShow] = React.useState(false);
    // function MyVerticallyCenteredModal(props) {
    //     return (
    //         <Modal
    //             {...props}
    //             size="sm"
    //             transparent={true}
    //             //className="bg-dark "
    //             //variant =" dark"
    //             aria-labelledby="contained-modal-title-vcenter"
    //             centered
    //         >
    //             {/*  <Modal.Header closeButton>
    //           <Modal.Title id="contained-modal-title-vcenter">
    //             Modal heading
    //           </Modal.Title>
    //         </Modal.Header> */}
    //             <Modal.Body transparent={true}>
    //                 {/*  <p>
    //           <img src={badge} alt="loading..." />
    //           </p> */}

    //                 <iframe
    //                     src="https://giphy.com/embed/kjDQ00nkmCrCezmje0"
    //                     width="300"
    //                     height="400"
    //                 ></iframe>

    //                 {/* <Button onClick={props.onHide}>Close</Button> */}
    //             </Modal.Body>
    //             {/*             <Modal.Footer>
    //         </Modal.Footer> */}
    //         </Modal>
    //     );
    // }

    /* --------------Modal---------------- */

    return (
        <>
            {Prescription.map((pres) => {
                for (const x of Prescription) {
                    console.log(x.adminsteredDose.length);
                }
                /*   console.log(Prescription);
                        console.log(pres);
                        let TOTAL = `${pres.adminsteredDose}`.length;
                        console.log(TOTAL);
                        console.log(pres.adminsteredDose); */

                let doseArray = pres.adminsteredDose;
                doseArray.map((dose) =>
                    dose.day == null
                        ? (doseArray.length = 0)
                        : (doseArray.length = pres.adminsteredDose.length)
                );

                let progress = (doseArray.length / pres.quantity) * 100;
                progress = Math.round(progress);
                console.log(progress);
                {
                    /*    value: ${pres.quantity},      
                                value:doseArray.length, */
                }

                return (
                    <>
                        <div>
                            {pres.active == "active" ? (
                                <div>
                                    {/* ----------------------------- */}
                                    <ListGroup>
                                        <ListGroup.Item action variant="info">
                                            {/* <div class="row "> */}
                                            <div>
                                                <h6>
                                                    {pres.medicineName}

                                                    {/* --------------check---------------- */}

                                                    {/* --------------check---------6------- */}
                                                    {/* 
                                                    <div class="col-md-10">
                                                        <div class="row">*/}
                                                            {/* <div class="col-md-3 col-sm-6"> */}
                                                            <div class="col-md-2">
                                                                <div class="progress blue"> 
                                                               {/*  <div class="progress blue"> */} 
                                                    <PieChart
                                                        /* style={{backgroundImage: "url(" + loading + ")"}} */
                                                        className="PieChart"
                                                        totalValue={parseInt(
                                                            pres.quantity
                                                        )}
                                                        //animationDuration={200}
                                                        /*   labelPosition={
                                                                            30
                                                                        } */
                                                        label={({
                                                            dataEntry,
                                                        }) => dataEntry.value}
                                                        radius={30}
                                                        data={[
                                                            {
                                                                title: "",
                                                                value: `${pres.quantity}`,
                                                                color:
                                                                    "#3683a1",
                                                            },
                                                            {
                                                                title: `Doses`,
                                                                value:
                                                                    doseArray.length,
                                                                color:
                                                                    "#1fc6d8",
                                                            },
                                                        ]}
                                                    />
                                                    </div>
                                                    </div>
                                                    </h6>
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
        </>
    );
};

//react-minimal-pie-chart
//https://www.npmjs.com/package/react-minimal-pie-chart
