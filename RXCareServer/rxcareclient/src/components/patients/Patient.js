import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { PrescriptionList } from "../prescription/PrescriptionList";
import Accordion from "react-bootstrap/Accordion";

import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import { PrescriptionListContent } from "../prescription/PrescriptionListContent";
import { TESTComment } from "../comments/TESTComment";
import { TESTCommentListContent } from "../comments/TESTCommentListContent";
import { PrescriptionCheckContent } from "../prescription/PrescriptionCheckContent";

export const Patient = ({ Id, Img, FirstName, LastName, Email, Note }) => {
    const navigate = useNavigate();
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);

    return (
        <>
            <div className="">
                {/*             <div class="d-flex justify-content-center h-100">
            <div class="image_outer_container">
                <div class="green_icon"></div>
                <div class="image_inner_container">
                    <img src={Img} />
                </div>
            </div>
        </div>  */}

                {/* -------------------------- */}
                <div class="container doctorCard">
                    <form method="post">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="profile-img">
                                    <img
                                        src={Img}
                                        alt=""
                                        style={{
                                            height: "200px",
                                            width: "200px",
                                        }}
                                    />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="profile-head">
                                    <h5>
                                        {FirstName} {LastName}
                                    </h5>
                                    <h6>{Email}</h6>
                                    <p class="proile-rating">
                                        NOTE : <span>{Note}</span>
                                    </p>
                                    <ul class="nav nav-tabs">
                                        <li class="nav-item">
                                            <Link to={`/patientsList/${Id}`}>
                                                <a
                                                    class="nav-link "
                                                    href="#home"
                                                    role="tab"
                                                    aria-controls="home"
                                                >
                                                    Profile
                                                </a>
                                            </Link>
                                        </li>
{/*                                         <li class="nav-item">
                                            <a
                                                class="nav-link"
                                                href="#profile"
                                                role="tab"
                                                aria-controls="profile"
                                            >
                                                Comment
                                            </a>
                                        </li> */}
                                        
{/*                                         <li
                                            class="nav-item"
                                            onClick={() => (
                                                <PrescriptionList
                                                    patient_Id={Id}
                                                />
                                            )}
                                        >
                                            <a
                                                class="nav-link"
                                                href="#profile"
                                                role="tab"
                                                aria-controls="profile"
                                            >
                                                Prescription
                                            </a>
                                        </li> */}

                                        {/* -----------collabse-----Comment-------- */}
{/*                                         <li  class="nav-item">
                                            <a
                                                class="nav-link"
                                                role="tab"
                                                onClick={() => setOpen1(!open1)}
                                                aria-controls="Prescription-collapse-text"
                                                aria-expanded={open1}
                                            >
                                            Comments
                                            </a>
                                            <Collapse in={open1}>
                                                <div id="Prescription-collapse-text">
                                                <TESTCommentListContent
                                                patient_Id={Id}
                                            />
                                                </div>
                                            </Collapse>
                                        </li> */}
                                        {/* -----------collabse------------- */}

                                        {/* -----------collabse-----Prescription-------- */}
                                        <li class="nav-item">
                                            <Link>
                                            <a
                                                class="nav-link"
                                                role="tab"
                                                onClick={() => setOpen2(!open2)}
                                                aria-controls="Prescription-collapse-text"
                                                aria-expanded={open2}
                                            >
                                                Prescription
                                            </a>
                                            <Collapse in={open2}>
                                                <div id="Prescription-collapse-text">
                                                <PrescriptionListContent
                                                patient_Id={Id}
                                            />
                                                </div>
                                                </Collapse>
                                                </Link>
                                        </li>
                                        {/* -----------collabse------------- */}

                                        {/* -----------collabse-----Report-------- */}
                                        <li class="nav-item">
                                        <Link>
                                            <a
                                                class="nav-link"
                                                role="tab"
                                                onClick={() => setOpen3(!open3)}
                                                aria-controls="Reports-collapse-text"
                                                aria-expanded={open3}
                                                style={{
                                                    color: 'primary'
                                                }}
                                            >
                                                Reports
                                            </a>
                                            <Collapse in={open3}>
                                                <div id="Reports-collapse-text">
                                                <PrescriptionCheckContent
                                                patient_Id={Id}
                                            />
                                                </div>
                                                </Collapse>
                                                </Link>
                                        </li>
                                        {/* -----------collabse------------- */}

                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-2">
                                <input
                                    type="submit"
                                    class="profile-edit-btn"
                                    name="btnAddMore"
                                    value="📝Edit Profile"
                                    onClick={() =>
                                        navigate(`/patientsList/${Id}/patientsList/edit/${Id}
                                        `)
                                    }
                                />
                            </div>
                        </div>
                    </form>
                </div>
                {/* -------------------------- */}
            </div>
        </>
    );
};
//http://localhost:3002/patientsList/7/patientsList/edit/7
//http://localhost:3002/patientsList/7patientsList/edit/7
