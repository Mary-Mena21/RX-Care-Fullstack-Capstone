import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../profile/ProfilePatient.css";
//import "./PrescriptionList.css";
import Accordion from "react-bootstrap/Accordion";
//import { Button } from "bootstrap";

export const PrescriptionList = ({ patient_Id }) => {
    console.log(patient_Id);
    var appUser = localStorage.getItem("app_user");
    var appUserObject = JSON.parse(appUser);
    console.log(appUserObject.type);
    const Type = appUserObject.type;
    console.log(Type);

    const [Prescription, setPrescription] = useState([]);
    //--------------Active/false------------------
    const [PrescriptionActive, setUpdatePrescriptionActive] = useState({
        id: 0,
        active: "inactive",
    });

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
    const handleActiveButtonClick = (e) => {
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
    };

    //TODO: Update FORM
    return (
        <>
            {/* <div> */}
            {/*  <Accordion> */}
            <Accordion.Item eventKey="0">
                <Accordion.Header>PRESCRIPTIONS</Accordion.Header>
                <Accordion.Body>
                    {Prescription.map((pres) => {
                        console.log(pres);
                        console.log(`${pres.adminsteredDose}`.length);
                        //console.log(count(pres.adminsteredDose));
                        return (
                            <>
                                <div>
                                    {pres.active == "active" ? (
                                        <div class="content-tabs profile-tab">
                                            <div class="row">
                                                <div class="tab-pane show active2">
                                                    <br />

                                                    <div class="profile-head">
                                                        <ul class="nav nav-tabs ">
                                                            &nbsp;&nbsp;
                                                            {/* ---------------Doctor-----------------*/}
                                                            {appUserObject.type ==
                                                            "Doctor" ? (
                                                                <>
                                                                    <li class="">
                                                                        <Link
                                                                            to={`UpdatePrescription/edit/${pres.id}`}
                                                                        >
                                                                            {" "}
                                                                            <input
                                                                                type="submit"
                                                                                class="profile-edit-btn-comment margin-ptn"
                                                                                name="btnAddMore"
                                                                                value="Update"
                                                                                onClick={(
                                                                                    evt
                                                                                ) => {
                                                                                    /*             window.confirm(
                                                                                    `Are you sure you want to Update Prescription ${pres.medicine.medicineName}?`
                                                                                ) */
                                                                                }}
                                                                            />
                                                                        </Link>
                                                                    </li>
                                                                    &nbsp;&nbsp;
                                                                    <li class="">
                                                                        <input
                                                                            type="submit"
                                                                            class="profile-edit-btn-comment margin-ptn"
                                                                            name="btnAddMore"
                                                                            value="Delete"
                                                                            onClick={(
                                                                                click
                                                                            ) => {
                                                                                PrescriptionActive.id =
                                                                                    pres.id;
                                                                                PrescriptionActive.active =
                                                                                    "inactive";
                                                                                setUpdatePrescriptionActive(
                                                                                    PrescriptionActive
                                                                                );
                                                                                handleActiveButtonClick(
                                                                                    click
                                                                                );
                                                                                fetchData();
                                                                            }}
                                                                        />
                                                                    </li>
                                                                </>
                                                            ) : (
                                                                ""
                                                            )}
                                                            {/*-------------Patient-----Comment------ */}
                                                            &nbsp;&nbsp;
                                                            {appUserObject.type ==
                                                            "Patient" ? (
                                                                <>
                                                                    <li class="link-glow">
                                                                        <Link
                                                                            to={`profile2/addCommentFromPatient/${patient_Id}`}
                                                                        >
                                                                            <input
                                                                                type="submit"
                                                                                class="profile-edit-btn-comment"
                                                                                name="btnAddMore"
                                                                                value="Add Comment"
                                                                            />
                                                                        </Link>
                                                                    </li>
                                                                </>
                                                            ) : (
                                                                ""
                                                            )}
                                                            {/*-------------Patient----------- */}
                                                        </ul>
                                                        {/* <hr /> */}
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-3">
                                                            <label>
                                                                Drug Name
                                                            </label>
                                                        </div>
                                                        <div class="col-md-9">
                                                            <p>
                                                                {
                                                                    pres
                                                                        .medicine
                                                                        .medicineName
                                                                }
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div class="row">
                                                        <div class="col-md-3">
                                                            <label></label>
                                                        </div>
                                                        <div class="col-md-9">
                                                            <p>
                                                                <img
                                                                    src={
                                                                        pres
                                                                            .medicine
                                                                            .imgUrl
                                                                    }
                                                                    className="medical-img"
                                                                />
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div class="row">
                                                        <div class="col-md-3">
                                                            <label>
                                                                Dosage
                                                            </label>
                                                        </div>
                                                        <div class="col-md-9">
                                                            <p>{pres.dosage}</p>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-3">
                                                            <label>
                                                                Quantity
                                                            </label>
                                                        </div>
                                                        <div class="col-md-9">
                                                            <p>
                                                                {pres.quantity}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-3">
                                                            <label>Form</label>
                                                        </div>
                                                        <div class="col-md-9">
                                                            <p>
                                                                {
                                                                    pres
                                                                        .medicine
                                                                        .form
                                                                }
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div class="row">
                                                        <div class="col-md-3">
                                                            <label>
                                                                SideEffects
                                                            </label>
                                                        </div>
                                                        <div class="col-md-9">
                                                            <p>
                                                                {
                                                                    pres
                                                                        .medicine
                                                                        .sideEffects
                                                                }
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div class="row">
                                                        <div class="col-md-3">
                                                            <label>
                                                                Drug Info
                                                            </label>
                                                        </div>
                                                        <div class="col-md-9">
                                                            <p>
                                                                {
                                                                    pres
                                                                        .medicine
                                                                        .drugInfo
                                                                }
                                                            </p>
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
                    {/* <p>{Prescription. dosage}</p> */}
                </Accordion.Body>
            </Accordion.Item>

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
