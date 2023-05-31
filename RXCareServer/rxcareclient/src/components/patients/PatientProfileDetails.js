import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../profile/ProfilePatient.css";

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
                                onClick={()=>navigate (`patientsList/edit/${patient_Id}`)}
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
                           
                            <div className="bloc-tabs">
                                <button
                                    className={
                                        toggleState === 1
                                            ? "tabs active-tabs"
                                            : "tabs"
                                    }
                                    onClick={() => toggleTab(1)}
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
                                        >
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
