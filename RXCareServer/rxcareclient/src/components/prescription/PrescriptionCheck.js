import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../profile/ProfilePatient.css";
import "../prescription/PrescriptionList.css";

import Accordion from "react-bootstrap/Accordion";
import { PieChart } from "react-minimal-pie-chart";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { badge } from "../images/badge.gif";

export const PrescriptionCheck = ({ patient_Id }) => {
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
            <Accordion.Item eventKey="2">
                <Accordion.Header>REPORT</Accordion.Header>
                <Accordion.Body>
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
                                : (doseArray.length =
                                      pres.adminsteredDose.length)
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
                                        <div class="content-tabs profile-tab">
                                            <div class="row">
                                                <div class="tab-pane show active2">
                                                    {/* <br /> */}

                                                    <div class="profile-head">
                                                        <ul class="nav nav-tabs ">
                                                            &nbsp;&nbsp;
                                                            {/* --------------------------------Doctor */}
                                                            {appUserObject.type ==
                                                            "Doctor" ? (
                                                                <>
                                                                    <li class="nav-item">
                                                                        <Link
                                                                            to={`UpdatePrescription/edit/${pres.id}`}
                                                                        >
                                                                            {" "}
                                                                            <input
                                                                                type="submit"
                                                                                class="profile-edit-btn-comment margin-ptn"
                                                                                name="btnAddMore"
                                                                                value="Update"
                                                                            />
                                                                        </Link>
                                                                    </li>
                                                                </>
                                                            ) : (
                                                                ""
                                                            )}
                                                            {/* --------------------------------Patient */}
                                                            {/*               &nbsp;&nbsp;
                                                            <li class="nav-item">
                                                                <Link
                                                                    to={`reportDose/report/${pres.id}`}
                                                                >
                                                                    {" "}
                                                                    <input
                                                                        type="submit"
                                                                        class="profile-edit-btn-comment"
                                                                        name="btnAddMore"
                                                                        value="Report"
                                                                    />
                                                                </Link>
                                                            </li> */}
                                                        </ul>
                                                        {/* <hr /> */}
                                                    </div>
                                                    <div class="row col-md-12">
                                                        <div class="col">
                                                            <p class="col-md-2">
                                                                <label>
                                                                    {
                                                                        pres.medicineName
                                                                    }
                                                                </label>
                                                            </p>
                                                            <div class="col-md-2">
                                                                <img
                                                                    src={
                                                                        pres.imgUrl
                                                                    }
                                                                    className="medical-img2"
                                                                />
                                                            </div>
                                                            <br />
                                                            <p class="col-md-2">
                                                                <label>
                                                                    Quantity {pres.quantity}
                                                                    
                                                                        
                                                                   
                                                                </label>
                                                            </p>
                                                           {/*  <div class="col-md-2">
                                                                <p>
                                                                    {
                                                                        pres.quantity
                                                                    }
                                                                </p>
                                                            </div> */}
                                                        </div>

                                                        {/* --------------check---------------- */}

                                                        <div class="col">
                                                            {appUserObject.type ==
                                                            "Patient" ? (
                                                                <>
                                                                    {/* **** */}
                                                                    <p class="col-md-10">
                                                                        <label>
                                                                            CHECK
                                                                        </label>
                                                                    
                                                                     <div class="col-md-10"> 
                                                                        <input
                                                                            variant="success"
                                                                            type="checkbox"
                                                                            className="checkbox"
                                                                            onChange={(
                                                                                evt
                                                                            ) => {
                                                                                const copy = {
                                                                                    ...AdministeredDose,
                                                                                };
                                                                                copy.prescriptionId =
                                                                                    pres.id;
                                                                                if (
                                                                                    evt
                                                                                        .target
                                                                                        .checked
                                                                                ) {
                                                                                    setAddAdministeredDose(
                                                                                        copy
                                                                                    );
                                                                                    fetchData(
                                                                                        copy
                                                                                    );
                                                                                }
                                                                                /*  window.confirm(
                                                                                    `You Take your dose of ${pres.medicineName}! 👏`) */
                                                                                /*  setModalShow(
                                                                                    true
                                                                                ); */
                                                                            }}
                                                                        ></input>

                                                                        {/*        <MyVerticallyCenteredModal
                                                                            size="sm"
                                                                            show={
                                                                                modalShow
                                                                            }
                                                                            onHide={() =>
                                                                                setModalShow(
                                                                                    false
                                                                                )
                                                                            }
                                                                        /> */}
                                                                     </div> 
                                                                            {/* **** */}
                                                                            </p>
                                                                </>
                                                            ) : (
                                                                ""
                                                            )}
                                                            {/* --------------check---------6------- */}

                                                            <p class="col-md-10">
                                                                <label>
                                                                    Progress{" "}
                                                                    <div class="progress-value">
                                                                        {
                                                                            progress
                                                                        }
                                                                        %
                                                                    </div>
                                                                </label>
                                                            </p>
                                                            <div class="col-md-10">
                                                                {/*  <PieChartAdministeredDose  patient_Id={patient_Id}/>   */}

                                                                <div class="row">
                                                                    <div class="col-md-3 col-sm-6">
                                                                        <div class="progress blue">
                                                                            <span class="progress-left">
                                                                                <span class="progress-bar"></span>
                                                                            </span>
                                                                            <span class="progress-right">
                                                                                <span class="progress-bar"></span>
                                                                            </span>

                                                                            <PieChart
                                                                                className="PieChart"
                                                                                totalValue={parseInt(
                                                                                    pres.quantity
                                                                                )}
                                                                                animationDuration={
                                                                                    300
                                                                                }
                                                                                labelPosition={
                                                                                    30
                                                                                }
                                                                                label={({
                                                                                    dataEntry,
                                                                                }) =>
                                                                                    dataEntry.value
                                                                                }
                                                                                // color={ "#00A99D"}
                                                                                //segmentsTabIndex={2}
                                                                                //radius = {50}
                                                                                //     //     {`${pres.adminsteredDose}`
                                                                                //     //         .length}
                                                                                //     totalValue= {pres.quantity}
                                                                                //     paddingAngle = {1}

                                                                                data={[
                                                                                    {
                                                                                        title:
                                                                                            "",
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

                                                                        {/* ----------check progress------------ */}
                                                                        {/*    <div class="row">
                                                            <div class="col-md-3 col-sm-6">
                                                                <div class="progress blue">
                                                                    <span class="progress-left">
                                                                        <span class="progress-bar"></span>
                                                                    </span>
                                                                    <span class="progress-right">
                                                                        <span class="progress-bar"></span>
                                                                    </span> */}
                                                                        {/* <div class="progress-value">{progress}%</div> */}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* ----------check progress------------ */}
                                                        </div>
                                                        <div class="row col-md-12">
                                                            &nbsp;
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        ""
                                    )}
                                </div>
                            </>
                        );
                    })}

                    {/* 
                Modal 
                    {<a class="btn btn-success" href="#success" data-toggle="modal"><h4><i class="glyphicon glyphicon-eye-open"></i> Success</h4></a>}
                    <div class="modal fade" id="success" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                {/* <div class="modal-header modal-header-success">
                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                    <h1><i class="glyphicon glyphicon-thumbs-up"></i> Success Modal</h1>
                                </div> */}
                    {/* <div class="modal-body">
                                </div> */}
                    {/*  <div class="modal-footer">
                                    <button type="button" class="btn btn-default pull-left" data-dismiss="modal">Close</button>
                                </div> 
                                <iframe src="https://giphy.com/embed/kjDQ00nkmCrCezmje0"  ></iframe>
                                👏👏👏👏
                            </div>
                        </div>
                    </div> */}
                </Accordion.Body>
            </Accordion.Item>
        </>
    );
};

//react-minimal-pie-chart
//https://www.npmjs.com/package/react-minimal-pie-chart
