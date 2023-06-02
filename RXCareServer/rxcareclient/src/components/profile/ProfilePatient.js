import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./ProfilePatient.css";
import { PrescriptionList } from "../prescription/PrescriptionList";
import Accordion from "react-bootstrap/Accordion";
import { PrescriptionListUser } from "../prescription/PrescriptionListUser";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { CommentList } from "../comments/CommentList";

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
    const [Prescriptions, setPrescriptions] = useState([]);
    const [Comment, setComment] = useState([]);
    //const {patient_Id} = useParams()
    console.log(patient_Id);

    //---------------Display PrescriptionList------------------
    //TODO: Cant read {patient_Id} in fech call ???????
    const fetchData = async () => {
        const response = await fetch(
            `https://localhost:7183/api/prescription/GetPrescriptionOnlyByPatientId/${patient_Id}`
        );
        const PrescriptionListArray = await response.json();
        setPrescriptions(PrescriptionListArray);
        console.log(PrescriptionListArray);
    };
    useEffect(() => {
        fetchData();
    }, []);

    /* -------------Display CommentList----------------- */
    //TODO: Cant read {patient_Id} in fech call ???????
    //TODO: Solution for null comment : if (Comments == null) { return NotFound(); } added in CommentController
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                //`https://localhost:7183/api/Comment/commentOnMedicine/${patient_Id}`
                `https://localhost:7183/api/Comment/${patient_Id}`
            );
            const CommentData = await response.json();
            setComment(CommentData);
            console.log(CommentData);
            
            // if(!CommentData) {
            //     setComment(CommentData)
            // } else {
            //     CommentData = {}
            // }
        };
        fetchData();
    }, []);
    //----------------------------------------------------------------

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
                                <h6>------------Y----USER----HI----{ patient_Id}</h6>
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
                                                {/* Some people have comment, but others haven't. */}
                                                {/*                                                {comment }?
                                                
                                                    <>
                                                        <p>
                                                            P:{" "}
                                                            {comment.pComment}
                                                        </p>
                                                        <p>
                                                            D:{" "}
                                                            {comment.dComment}
                                                        </p>
                                                    </>
                                                
                                                :{""} */}
                                                {/* <h5>{Prescriptions.medicine.medicineName}</h5>  */}
                                                {/* <p>P: {comment.pComment}</p>
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

                        {/* -------------TABS-------------- */}
                        <div className="col-md-8">
                            <Tabs
                                defaultActiveKey="profile"
                                id="fill-tab-example"
                                className="mb-6 "
                                fill
                            >
                                <Tab
                                    eventKey="home"
                                    title="Home"
                                    tabClassName="Tabs"
                                    className="content-tabs profile-tab container"
                                >
                                    <div class="row">
                                        <div class="tab-pane show active">
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
                                </Tab>

                                <Tab
                                    eventKey="profile"
                                    title="Profile"
                                    tabClassName="Tabs"
                                    className="content-tabs profile-tab container"
                                >
                                    <div class="row">
                                        <div class="tab-pane show active">
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

                                            {/*<div class="row">
                                <div class="col-md-12">
                                    <p>
                                    Prescription
                                    </p>
                                </div>
                            </div> */}
                                        </div>
                                    </div>
                                </Tab>
                            </Tabs>
                        </div>
                        {/* -------------TABS-------------- */}

                        {/* ******Accordion****** */}
                        {/*                             <Accordion>
                                <PrescriptionList patient_Id={patient_Id} />
                                <CommentList patient_Id={patient_Id}/>
                            </Accordion> */}
                        {/* ************ */}
                    </div>
                </form>
            </div>
        </>
    );
};
