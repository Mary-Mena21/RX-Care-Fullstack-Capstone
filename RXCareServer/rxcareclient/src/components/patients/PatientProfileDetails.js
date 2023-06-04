import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../profile/ProfilePatient.css";
import { PrescriptionList } from "../prescription/PrescriptionList";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Accordion from "react-bootstrap/Accordion";
import { Button } from "bootstrap";
import { CommentList } from "../comments/CommentList";
import { Comment, TESTComment } from "../comments/TESTComment";
import { TESTCommentList } from "../comments/TESTCommentList";

export const PatientProfileDetails = ({
    patient_Id,
    Image,
    FirstName,
    LastName,
    DoB,
    YoB,
    Age,
    Email,
    Phone,
    patientIdNumber,
    Address,
    Height,
    Weight,
    Note,
    DoctorFirstName,
    DoctorLastName,
    DoctorEmail,
    ClinicPhone,
    ClinicAddress,
    ClinicFacility,
    ClinicType,
    ClinicLocation,
    Prescriptions,
}) => {
    const [toggleState, setToggleState] = useState(1);
    const navigate = useNavigate();

    const toggleTab = (index) => {
        setToggleState(index);
    };
    console.log(DoB);
    return (
        <>
            <div class="container emp-profile ">
                <form>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="profile-img">
                                <img src={Image} className="patientImg" />
                                <div class="file btn btn-lg btn-primary">
                                    Change Photo
                                    <input type="file" name="file" />
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="profile-head">
                                <h5>
                                    {FirstName} {LastName}
                                </h5>
                                <h6>------------X------------</h6>
                                {/*                                 <p class="proile-rating">
                                    DOCTOR :{" "}
                                    <span>
                                        {DoctorFirstName} {DoctorLastName}
                                    </span>
                                </p> */}
                            </div>
                            <div class="profile-head">
                                <ul class="nav nav-tabs ">
                                    <li class="nav-item">
                                        <a class="nav-link ">PRESCRIPTIONS</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link "> COMMENTS </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link "> REPORTS </a>
                                    </li>
                                </ul>
                            </div>
                            {/* ******Accordion****** */}
                            <Accordion>
                                <PrescriptionList patient_Id={patient_Id} />
                               {/*  <CommentList patient_Id={patient_Id} /> */}
                                {/* <Comment patient_Id={patient_Id} /> */}
                                <TESTCommentList patient_Id={patient_Id}/>
                                </Accordion>
                                {/* ************ */}
                        </div>
                        <div class="col-md-2">
                            <br />

                            <div>
                                <input
                                    type="submit"
                                    class="profile-edit-btn"
                                    name="btnAddMore"
                                    value="Edit Profile"
                                    onClick={() =>
                                        navigate(
                                            `patientsList/edit/${patient_Id}`
                                        )
                                    }
                                />
                            </div>
                            <br />
                            <div>
                                <input
                                    type="submit"
                                    class="profile-edit-btn"
                                    name="btnAddMore"
                                    value="Add Prescription"
                                    onClick={() =>
                                        navigate(
                                            `addPrescription/add/${patient_Id}`
                                        )
                                    }
                                />
                            </div>
                            <br />

{/*                             <div>
                                <input
                                    type="submit"
                                    class="profile-edit-btn"
                                    name="btnAddMore"
                                    value="Add Comment"
                                    onClick={() =>
                                        navigate(`addComment/add/${patient_Id}`)
                                    }
                                />
                                <br />

                                <div>
                                    <input
                                        type="submit"
                                        class="profile-edit-btn"
                                        name="btnAddMore"
                                        value="AddCFDoctor"
                                        onClick={() =>
                                            navigate(
                                                `addCommentFromDoctor/addComment/${patient_Id}`
                                            )
                                        }
                                    />
                                    <br />
                                </div>
                            </div> */}
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-4">
                            <div class="profile-work">
                                <p>DOCTOR INFO</p>
                                <a href="">
                                    Dr: {DoctorFirstName} {DoctorLastName}
                                </a>
                                <br />
                                <a href="">{DoctorEmail}</a>
                                <p>CLINIC</p>
                                <a href="">{ClinicPhone}</a>
                                <br />
                                <a href="">{ClinicAddress}</a>
                                <br />
                                <a href="">{ClinicFacility}</a>
                                <br />
                                <a href="">{ClinicLocation}</a>
                                <br />
                            </div>
                        </div>
                        {/* -------------TABS-------------- */}
                        <div className="col-md-8">
                            <Tabs
                                defaultActiveKey="profile"
                                id="fill-tab-example"
                                className="mb-3"
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
                                                        {FirstName} {LastName}
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-3">
                                                    <label>Email</label>
                                                </div>
                                                <div class="col-md-9">
                                                    <p>{Email}</p>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-3">
                                                    <label>YoB - Age</label>
                                                </div>
                                                <div class="col-md-9">
                                                    <p>
                                                        {YoB} - {Age}
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-3">
                                                    <label>Phone</label>
                                                </div>
                                                <div class="col-md-9">
                                                    <p>{Phone}</p>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-3">
                                                    <label>Address</label>
                                                </div>
                                                <div class="col-md-9">
                                                    <p>{Address}</p>
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
                                                    <p>{Height} / Inch</p>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-3">
                                                    <label>Weight</label>
                                                </div>
                                                <div class="col-md-9">
                                                    <p>{Weight} / Pound</p>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-3">
                                                    <label>Note</label>
                                                </div>
                                                <div class="col-md-9">
                                                    <p>{Note}</p>
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
                    </div>
                </form>
            </div>
        </>
    );
};
