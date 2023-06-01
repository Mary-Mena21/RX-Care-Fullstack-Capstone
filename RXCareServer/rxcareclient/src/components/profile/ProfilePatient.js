import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ProfilePatient.css";
import { PrescriptionList } from "../prescription/PrescriptionList";
import Accordion from "react-bootstrap/Accordion";

export const PatientProfile = ({
    image,
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
}) => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    //console.log(Id);
    return (
        <>
            <div class="container emp-profile">
                <h1>patient profile</h1>
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
                            </div>
                               {/*  <PrescriptionList patient_Id={Id} />   */}
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
