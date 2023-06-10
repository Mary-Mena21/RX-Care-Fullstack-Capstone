import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../profile/ProfilePatient.css";
//import "./PrescriptionList.css";
import Accordion from "react-bootstrap/Accordion";
// import { Button } from "bootstrap";
// import Form from "react-bootstrap/Form";
// import { PieChartAdministeredDose } from "../adminsteredDose/PieChartAdministeredDose";
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
                <Accordion.Body>
                    {Prescription.map((pres) => {
                        for (const x of Prescription) {
                            console.log(x.adminsteredDose.length);
                        }
                        console.log(Prescription);
                        console.log(pres);
                        let TOTAL = `${pres.adminsteredDose}`.length;
                        console.log(TOTAL);
                        return (
                            <>
                                <div>
                                    {pres.active == "active" ? (
                                        <div class="content-tabs profile-tab">
                                            <div class="row">
                                                <div class="tab-pane show active2 Container">
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
                                                                    {/*                                                                 &nbsp;&nbsp;
                                                                <li class="nav-item">
                                                                    <input
                                                                        type="submit"
                                                                        class="profile-edit-btn-comment"
                                                                        name="btnAddMore"
                                                                        value="Delete"
                                                                        onClick={() => {
                                                                            window.confirm(
                                                                                `Are you sure you want to delete Prescription ${pres.medicineName}?`
                                                                            ) &&
                                                                                `${pres.active ==
                                                                                    false}`;
                                                                            // fetch(
                                                                            //     `https://localhost:7183/api/prescription/${pres.id}`,
                                                                            //     {
                                                                            //         method:
                                                                            //             "DELETE",
                                                                            //     }
                                                                            // ).then();
                                                                        }}
                                                                    />
                                                                </li> */}
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
                                                        <hr />
                                                    </div>
                                                    <div class="row col-md-12">
                                                        <div class="col">
                                                            <p class="col-md-4">
                                                                <label>
                                                                    QUANTITY
                                                                </label>
                                                            </p>
                                                            <div class="col-md-4">
                                                                <p>
                                                                    {
                                                                        pres.quantity
                                                                    }
                                                                </p>
                                                            </div>

                                                            <p class="col-md-4">
                                                                <label>
                                                                    {
                                                                        pres.medicineName
                                                                    }
                                                                </label>
                                                            </p>
                                                            <div class="col-md-4">
                                                                <img
                                                                    src={
                                                                        pres.imgUrl
                                                                    }
                                                                    className="medical-img2"
                                                                />
                                                            </div>
                                                        </div>

                                                        {/* --------------check---------------- */}

                                                        <div class="col">
                                                            <p class="col-md-8">
                                                                <label>
                                                                    CHECK
                                                                </label>
                                                            </p>
                                                            <div class="col-md-8">
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
                                                            </div>

                                                            {/* --------------check---------6------- */}

                                                            <p class="col-md-8">
                                                                <label>
                                                                    REPORT
                                                                </label>
                                                            </p>
                                                            <div class="col-md-8">
                                                                {/*  <PieChartAdministeredDose  patient_Id={patient_Id}/>   */}
                                                                <PieChart
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
                                                                                "#0072CE",
                                                                        },
                                                                        {
                                                                            title: `Doses`,
                                                                            value:
                                                                                pres
                                                                                    .adminsteredDose
                                                                                    .length,
                                                                            color:
                                                                                "#00A99D",
                                                                        },
                                                                    ]}
                                                                />
                                                            </div>
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
                </Accordion.Body>
            </Accordion.Item>
        </>
    );
};

//react-minimal-pie-chart
//https://www.npmjs.com/package/react-minimal-pie-chart
