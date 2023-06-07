import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../profile/ProfilePatient.css";
//import "./PrescriptionList.css";
import Accordion from "react-bootstrap/Accordion";
import { Button } from "bootstrap";
import Form from "react-bootstrap/Form";
import { PieChartAdministeredDose } from "../adminsteredDose/PieChartAdministeredDose";
import { PieChart } from "react-minimal-pie-chart";

export const PrescriptionCheck = ({ patient_Id }) => {
    const [Prescription, setPrescription] = useState([]);
    const [Administered, setAdministered] = useState([]);
    //--------------------------------
    var appUser = localStorage.getItem("app_user");
    var appUserObject = JSON.parse(appUser);
    console.log(appUserObject.type);
    const Type = appUserObject.type;
    console.log(Type);

    //     /* -------------Display AdministeredDoseList----------------- */
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `https://localhost:7183/api/prescription/GetPrescriptionDosesByPatientId/${patient_Id}`
            );
            const AdministeredDoseArray = await response.json();
            setAdministered(AdministeredDoseArray);
            // console.log(AdministeredDoseArray);
        };
        fetchData();
    }, []);
    /* -------------Display PrescriptionList----------------- */

    const fetchDataPrescriptionList = async () => {
        const response = await fetch(
            //`https://localhost:7183/api/prescription/Patient/${patient_Id}`
            //`https://localhost:7183/api/prescription/GetPrescriptionDosesByPatientId/${patient_Id}`
            `https://localhost:7183/api/prescription/GetPrescriptionDosesByPatientIdAll/${patient_Id}`
        );
        const PrescriptionListArray = await response.json();
        setPrescription(PrescriptionListArray);
        console.log(PrescriptionListArray);
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
        const response = await fetch(
            ` https://localhost:7183/api/AdminsteredDose/Add`,
            fetchOptions
        );
        //navigate(`../patientsList/${patient_Id}`);
        const responseJson = await response.json();
        return responseJson;
    };
    /* ------------------------------ */

    /* ------------------------------ */

    return (
        <>
            <Accordion.Item eventKey="2">
                <Accordion.Header>REPORT</Accordion.Header>

                {Prescription.map((pres) => {
                    return (
                        <>
                            <Accordion.Body>
                                {pres.active == true ? (
                                    <div class="content-tabs profile-tab">
                                        <div class="row">
                                            <div class="tab-pane show active2">
                                                <br />

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
                                                                            class="profile-edit-btn-comment"
                                                                            name="btnAddMore"
                                                                            value="Update"
                                                                        />
                                                                    </Link>
                                                                </li>
                                                                &nbsp;&nbsp;
                                                                <li class="nav-item">
                                                                    <input
                                                                        type="submit"
                                                                        class="profile-edit-btn-comment"
                                                                        name="btnAddMore"
                                                                        value="Delete"
                                                                        onClick={() => {
                                                                            window.confirm(
                                                                                `Are you sure you want to delete Prescription ${pres.medicineName}?`
                                                                            )
                                                                                 && `${ pres.active == false }`
                                                                                // fetch(
                                                                                //     `https://localhost:7183/api/prescription/${pres.id}`,
                                                                                //     {
                                                                                //         method:
                                                                                //             "DELETE",
                                                                                //     }
                                                                                // ).then();
                                                                        }}
                                                                    />
                                                                </li>
                                                            </>
                                                        ) : (
                                                            ""
                                                        )}
                                                        {/* --------------------------------Patient */}
                                                        &nbsp;&nbsp;
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
                                                        </li>
                                                    </ul>
                                                    <hr />
                                                </div>

                                                <div class="row">
                                                    <div class="col-md-3">
                                                        <label>Drug Name</label>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <p>
                                                            {pres.medicineName}
                                                        </p>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="col-md-3">
                                                        <label></label>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <p>
                                                            <img
                                                                src={
                                                                    pres.imgUrl
                                                                }
                                                                className="medical-img"
                                                            />
                                                        </p>
                                                    </div>
                                                    {/* --------------check---------------- */}
                                                    <div class="col-md-3">
                                                        <p>
                                                            <input
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
                                                                    console.log(
                                                                        pres.id
                                                                    );
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
                                                                        window.confirm(
                                                                            `Are you sure you want to Check Prescription ${pres.medicineName}?`
                                                                        );
                                                                    }
                                                                }}
                                                            ></input>
                                                        </p>
                                                    </div>
                                                    {/* --------------check---------------- */}
                                                    <div class="col-md-3">
                                                        {/*  <PieChartAdministeredDose  patient_Id={patient_Id}/>   */}
                                                        <PieChart
                                                            data={[
                                                                {
                                                                    title:
                                                                        "One",
                                                                    value:
                                                                        pres.quantity,
                                                                    color:
                                                                        "#00A99D",
                                                                },
                                                                {
                                                                    title:
                                                                        "Two",
                                                                    value:
                                                                        pres
                                                                            .adminsteredDose
                                                                            .length,
                                                                    color:
                                                                        "#0072CE",
                                                                },
                                                            ]}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    ""
                                )}
                            </Accordion.Body>
                        </>
                    );
                })}
            </Accordion.Item>
        </>
    );
};

//react-minimal-pie-chart
//https://www.npmjs.com/package/react-minimal-pie-chart