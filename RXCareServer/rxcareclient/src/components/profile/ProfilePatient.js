import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ProfilePatient.css";

export const PatientProfile = ({
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

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <>
            <div class="container emp-profile bloc-tabs">
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
                                <h6>------------------------</h6>
                                <p class="proile-rating">
                                    DOCTOR :{" "}
                                    <span>
                                        {DoctorFirstName} {DoctorLastName}
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <input
                                type="submit"
                                class="profile-edit-btn"
                                name="btnAddMore"
                                value="Edit Profile"
                            />
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

                        <div className="col-md-8">
                            {/*  */}
                            <div className="bloc-tabs">
                                <button
                                    className={
                                        toggleState === 1
                                            ? "tabs active-tabs"
                                            : "tabs"
                                    }
                                    onClick={() => toggleTab(1)}
                                >
                                    Tab 1
                                </button>
                                <button
                                    className={
                                        toggleState === 2
                                            ? "tabs active-tabs"
                                            : "tabs"
                                    }
                                    onClick={() => toggleTab(2)}
                                >
                                    Tab 2
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
                                            id="profile"
                                            role="tabpanel"
                                            aria-labelledby="profile-tab"
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
                                            id="profile"
                                            role="tabpanel"
                                            aria-labelledby="profile-tab"
                                        >
                                            <br />
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label>Experience</label>
                                                </div>
                                                <div class="col-md-6">
                                                    <p>Expert</p>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label>Hourly Rate</label>
                                                </div>
                                                <div class="col-md-6">
                                                    <p>10$/hr</p>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label>
                                                        Total Projects
                                                    </label>
                                                </div>
                                                <div class="col-md-6">
                                                    <p>230</p>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label>English Level</label>
                                                </div>
                                                <div class="col-md-6">
                                                    <p>Expert</p>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label>Availability</label>
                                                </div>
                                                <div class="col-md-6">
                                                    <p>6 months</p>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <label>Your Bio</label>
                                                    <br />
                                                    <p>
                                                        Your detail description
                                                    </p>
                                                </div>
                                            </div>
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
