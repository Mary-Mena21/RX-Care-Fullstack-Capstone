import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./ProfilePatient.css";
import { PrescriptionList } from "../prescription/PrescriptionList";
// import Accordion from "react-bootstrap/Accordion";
// import { PrescriptionListUser } from "../prescription/PrescriptionListUser";

// import Tab from "react-bootstrap/Tab";
// import Tabs from "react-bootstrap/Tabs";
// import { CommentList } from "../comments/CommentList";
// import { PrescriptionCheck } from "../prescription/PrescriptionCheck";
// import { TESTCommentList } from "../comments/TESTCommentList";
// import { PrescriptionCheckUser } from "../prescription/PrescriptionCheckUser";

export const ProfilePatient2 = ({
    patient_Id,
    image,
    firstName,
    lastName,
    email,
    doctorFirstName,
    doctorLastName,
    // patientUser,
    // doB,
    // yoB,
    // age,
    // address,
    // phone,
    // patientIdNumber,
    // height,
    // weight,
    // note,
    // doctorEmail,
    // clinicPhone,
    // clinicAddress,
    // clinicFacility,
    // clinicType,
    // clinicLocation,
    // prescriptions,
    // comments,
    // medicine,
}) => {
    const navigate = useNavigate();
    console.log(patient_Id);
    // console.log(comments);
    // console.log(prescriptions);
    //let commentsX = [...new Set(comments)]
    //console.log(commentsX);
    //console.log(comments);
    // const [Prescriptions, setPrescriptions] = useState([]);
    const [CommentOnly, setCommentOnly] = useState([]);
    // //const {patient_Id} = useParams()
    // console.log(patient_Id);

    // //---------------Display PrescriptionList------------------
    // //TODO: Cant read {patient_Id} in fech call ???????
    // const fetchData = async () => {
    //     const response = await fetch(
    //         `https://localhost:7183/api/prescription/GetPrescriptionOnlyByPatientId/${patient_Id}`
    //     );
    //     const PrescriptionListArray = await response.json();
    //     setPrescriptions(PrescriptionListArray);
    //     console.log(PrescriptionListArray);
    // };
    // useEffect(() => {
    //     fetchData();
    // }, []);

    // /* -------------Display ----------------- */
    // //TODO: Cant read {patient_Id} in fech call ???????
    // //TODO: Solution for null comment : if (Comments == null) { return NotFound(); } added in CommentController

    const fetchData2 = async () => {
        const response = await fetch(
            `https://localhost:7183/api/Comment/commentOnMedicine/${patient_Id}`
            //`https://localhost:7183/api/Comment/${patient_Id}`
        );
        const CommentData = await response.json();
        setCommentOnly(CommentData);
        console.log(CommentData);

        // if(!CommentData) {
        //     setComment(CommentData)
        // } else {
        //     CommentData = {}
        // }
    };
    useEffect(() => {
       // fetchData2();
    }, []);
    //----------------------------------------------------------------
    //typeof products.map() !== undefined

    return (
        <>
             <div class="container"> 
                {/* -------------------------- */}
                <h1 class=" col-md-4 ml-auto search-text ">Profile Patient</h1>
                <div class="container emp-profile">
                    <form method="post">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="profile-img">
                                    <img
                                        src={image}
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
                                        {firstName} {lastName}
                                    </h5>
                                    <h6>{email}</h6>
                                    {/*-------------------------------------- */}

                                    <p class="proile-rating">
                                        DOCTOR :{" "}
                                        <span>
                                            {doctorFirstName} {doctorLastName}
                                        </span>
                                    </p>
                                    {/*-------------------------------------- */}

{/*                                     <div>
                                        <div class="profile-head">
                                            <ul class="nav nav-tabs ">

                                                <li class="nav-item">
                                                    <input
                                                        type="submit"
                                                        class="profile-edit-btn-comment"
                                                        name="btnAddMore"
                                                        value="ADD-COMMENT"
                                                        onClick={() =>
                                                            navigate(
                                                                `addCommentFromPatient/${patient_Id}`
                                                            )
                                                        }
                                                    />
                                                </li>


                                                &nbsp;&nbsp;
                                                <li class="nav-item">
                                                    <input
                                                        type="submit"
                                                        class="profile-edit-btn-comment"
                                                        name="btnAddMore"
                                                        value="CHECK-DOSER"
                                                        onClick={() =>
                                                            navigate(
                                                                `/profile/prescriptionCheckUser/${patient_Id}`
                                                            )
                                                        }
                                                    />
                                                </li>

                                            </ul>
                                        </div>
                                        </div>
                                        <br /> */}
                                    {/* ------------------------------------- */}

                                    <ul class="nav nav-tabs">
                                        <li class="nav-item">
                                            <Link
                                                to={`/patientsList/${patient_Id}`}
                                            >
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
                                        <li class="nav-item">
                                            <a
                                                class="nav-link"
                                                href="#profile"
                                                role="tab"
                                                aria-controls="profile"
                                            >
                                                Comments
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a
                                                class="nav-link"
                                                href="#profile"
                                                role="tab"
                                                aria-controls="profile"
                                            >
                                                Prescriptions
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-2">
                            <div>
                                <input
                                    type="submit"
                                    class="profile-edit-btn"
                                    name="btnAddMore"
                                    value="📝Edit Profile"
                                    onClick={() =>
                                        navigate(
                                            `/patientsList/${patient_Id}/patientsList/edit/${patient_Id}`
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
                                value="Add Comment"
                                onClick={() =>
                                    navigate(
                                        `/patientsList/1/profile2/addCommentFromPatient/${patient_Id}`
                                    )
                                }
                            />
                        </div>
                        </div>
                        <br />

                        </div>
                    </form>
                </div>
                {/* -------------------------- */}
             </div> 
        </>
    );
};


