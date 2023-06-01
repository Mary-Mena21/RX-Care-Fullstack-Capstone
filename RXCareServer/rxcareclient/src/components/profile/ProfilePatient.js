import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ProfilePatient.css";
import { PrescriptionList } from "../prescription/PrescriptionList";
import Accordion from "react-bootstrap/Accordion";
import { PrescriptionListUser } from "../prescription/PrescriptionListUser";

export const PatientProfile = ({
    patient_Id,
    image,
    patientUser,
    firstName,
    lastName,
    email,
    doB,
    yoB,
    age,
    address,
    phone,
    patientIdNumber,
    height,
    weight,
    note,
    doctorFirstName,
    doctorLastName,
    doctorEmail,
    clinicPhone,
    clinicAddress,
    clinicFacility,
    clinicType,
    clinicLocation,
    prescriptions,
    comment,
    medicine,
}) => {
    const [toggleState, setToggleState] = useState(1);
    // const [Prescriptions, setPrescriptions] = useState([]);
    console.log(patientUser);
    console.log(firstName);
    console.log(prescriptions);
    console.log(comment);
    const toggleTab = (index) => {
        setToggleState(index);
        //----------------------------------------------------------------
    };

    // console.log(patientUser);

    //     const fetchData = async () => {
    //         const response = await fetch(
    //             `https://localhost:7183/api/prescription/Patient/${patientUser}`
    //         );
    //         const PrescriptionListArray = await response.json();
    //         setPrescriptions(PrescriptionListArray);
    //         console.log(PrescriptionListArray);
    // };
    // useEffect(() => {
    //     fetchData();
    // }, []);

    //console.log(Id);
    return (
        <>
            <div class="container emp-profile">
                <form>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="profile-img">
                                <img src={image} className="patientImg" />
                                <div class="file btn btn-lg btn-primary">
                                    Change Photo
                                    <input type="file" name="file" />
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="profile-head">
                                <h5>
                                    {firstName} {lastName}
                                </h5>
                                <h6>------------------------</h6>
                                <p class="proile-rating">
                                    DOCTOR :{" "}
                                    <span>
                                        {doctorFirstName} {doctorLastName}
                                    </span>
                                </p>
                                {/*-------------------------------------- */}
                                <div>
                                    <Accordion>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>
                                                PRESCRIPTION
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                {prescriptions.map((pres) => {
                                                    return (
                                                        <>
                                                            <div class="content-tabs profile-tab">
                                                                <div class="row">
                                                                    <div class="tab-pane show active2">
                                                                        <br />

                                                                        <div class="profile-head">
                                                                            <ul class="nav nav-tabs ">
                                                                                <li class="nav-item">
                                                                                    <a class="nav-link ">
                                                                                        {" "}
                                                                                        UPDATE
                                                                                    </a>
                                                                                </li>

                                                                                <li class="nav-item">
                                                                                    <a class="nav-link ">
                                                                                        {" "}
                                                                                        REPORT{" "}
                                                                                    </a>
                                                                                </li>
                                                                                <li class="nav-item">
                                                                                    <a class="nav-link ">
                                                                                        {" "}
                                                                                        DELETE
                                                                                    </a>
                                                                                </li>
                                                                                <li class="nav-item">
                                                                                    <a class="nav-link ">
                                                                                        {" "}
                                                                                        ADD-COMMENT{" "}
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>

                                                                        <div class="row">
                                                                            <div class="col-md-3">
                                                                                <label>
                                                                                    Drug
                                                                                    Name
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
                                                                                <p>
                                                                                    {
                                                                                        pres.dosage
                                                                                    }
                                                                                </p>
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
                                                                                    {
                                                                                        pres.quantity
                                                                                    }
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div class="row">
                                                                            <div class="col-md-3">
                                                                                <label>
                                                                                    Form
                                                                                </label>
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
                                                                                    Drug
                                                                                    Info
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
                                                        </>
                                                    );
                                                })}
                                                {/* <p>{Prescription. dosage}</p> */}
                                            </Accordion.Body>
                                        </Accordion.Item>

                                       <Accordion.Item eventKey="1">
                                            <Accordion.Header>
                                                COMMENTS
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                {/* <h5>{medicine.medicineName}</h5> */}
                                               {/*  <p>P: {comment.pComment}</p>
                                                <p>D: {comment.dComment}</p> */}
                                            </Accordion.Body>
                                        </Accordion.Item> 

                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>
                                                REPORT
                                            </Accordion.Header>
                                            <Accordion.Body>DEF</Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                    <br />
                                </div>
                                {/* ------------------------------------- */}
                            </div>
                        </div>
                        {/*                         <div class="col-md-2">
                            <input
                                type="submit"
                                class="profile-edit-btn"
                                name="btnAddMore"
                                value="Edit Profile"
                            />
                        </div> */}
                    </div>

                    <div class="row">
                        <div class="col-md-4">
                            <div class="profile-work">
                                <p>DOCTOR INFO</p>
                                <a href="">
                                    Dr: {doctorFirstName} {doctorLastName}
                                </a>
                                <br />
                                <a href="">{doctorEmail}</a>
                                <p>CLINIC</p>
                                <a href="">{clinicPhone}</a>
                                <br />
                                <a href="">{clinicAddress}</a>
                                <br />
                                <a href="">{clinicFacility}</a>
                                <br />
                                <a href="">{clinicLocation}</a>
                                <br />
                            </div>
                        </div>

                        <div className="col-md-8">
                            {/*  */}
                            <div className="bloc-tabs">
                                <button
                                    className={
                                        toggleState === 1
                                            ? "tabs active-tabs"
                                            : "tabs"
                                    }
                                    //onClick={() =>}
                                >
                                    Patient Information
                                </button>
                                <button
                                    className={
                                        toggleState === 2
                                            ? "tabs active-tabs"
                                            : "tabs"
                                    }
                                    onClick={() => toggleTab(2)}
                                >
                                    Health Check
                                </button>
                            </div>
                            <div className="content-tabs profile-tab ">
                                <div
                                    className={
                                        toggleState === 1
                                            ? "content  active-content"
                                            : "content"
                                    }
                                >
                                    <div class="row">
                                        <div
                                            class="tab-pane show active"
                                            // id="profile"
                                            // role="tabpanel"
                                            // aria-labelledby="profile-tab"
                                        >
                                            <br />
                                            <div class="row">
                                                <div class="col-md-3">
                                                    <label>PatientId</label>
                                                </div>
                                                <div class="col-md-9">
                                                    <p>{patientIdNumber}</p>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-3">
                                                    <label>Name</label>
                                                </div>
                                                <div class="col-md-9">
                                                    <p>
                                                        {firstName} {lastName}
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-3">
                                                    <label>Email</label>
                                                </div>
                                                <div class="col-md-9">
                                                    <p>{email}</p>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-3">
                                                    <label>YoB - Age</label>
                                                </div>
                                                <div class="col-md-9">
                                                    <p>
                                                        {yoB} - {age}
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-3">
                                                    <label>Phone</label>
                                                </div>
                                                <div class="col-md-9">
                                                    <p>{phone}</p>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-3">
                                                    <label>Address</label>
                                                </div>
                                                <div class="col-md-9">
                                                    <p>{address}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className={
                                        toggleState === 2
                                            ? "content  active-content"
                                            : "content"
                                    }
                                >
                                    <div class="row">
                                        <div
                                            class="tab-pane show active"
                                            // id="profile"
                                            // role="tabpanel"
                                            // aria-labelledby="profile-tab"
                                        >
                                            <br />
                                            <div class="row">
                                                <div class="col-md-3">
                                                    <label>Height</label>
                                                </div>
                                                <div class="col-md-9">
                                                    <p>{height} / Inch</p>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-3">
                                                    <label>Weight</label>
                                                </div>
                                                <div class="col-md-9">
                                                    <p>{weight} / Pound</p>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-3">
                                                    <label>Note</label>
                                                </div>
                                                <div class="col-md-9">
                                                    <p>{note}</p>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-3">
                                                    <label>Prescription</label>
                                                </div>
                                                <div class="col-md-9">
                                                    <p>Prescription</p>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-3">
                                                    <label>comment</label>
                                                </div>
                                                <div class="col-md-9">
                                                    <p>comment</p>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-3">
                                                    <label>Report</label>
                                                </div>
                                                <div class="col-md-9">
                                                    <p>Report</p>
                                                </div>
                                            </div>

                                            {/*                                             <div class="row">
                                                <div class="col-md-12">
                                                    <p>
                                                    Prescription
                                                    </p>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};
