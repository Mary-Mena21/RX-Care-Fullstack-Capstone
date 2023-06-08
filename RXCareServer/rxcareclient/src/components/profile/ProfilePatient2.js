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
    comments,
    medicine,
}) => {
    const navigate = useNavigate();
    console.log(patient_Id);
    console.log(comments);
    console.log(prescriptions);
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
        fetchData2();
    }, []);
    //----------------------------------------------------------------
    //typeof products.map() !== undefined

    return (
        <>
            {/*                 /+-+-+-ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ
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
                                <h6>
                                    ------------Y----USER-Profile2---HI----
                                    {patient_Id}
                                </h6>
                                <p class="proile-rating">
                                    DOCTOR :{" "}
                                    <span>
                                        {doctorFirstName} {doctorLastName}
                                    </span>
                                </p>
                                

                                <div>
                                    <div class="profile-head">
                                        <ul class="nav nav-tabs ">
                                            <li class="nav-item">
                                                <a class="nav-link "></a>
                                            </li>
                                            <li class="nav-item">
                                                <input
                                                    type="submit"
                                                    class="profile-edit-btn nav-item"
                                                    name="btnAddMore"
                                                    value="ADD-COMMENT ...."
                                                    onClick={() =>
                                                        navigate(
                                                            `addCommentFromPatient/${patient_Id}`
                                                        )
                                                    }
                                                />
                                            </li>

                                            <li class="nav-item">
                                                <input
                                                    type="submit"
                                                    class="profile-edit-btn nav-item"
                                                    name="btnAddMore"
                                                    value="CHECK-DRUG ...."
                                                    onClick={() =>
                                                        navigate(
                                                            `/profile/prescriptionCheckUser/${patient_Id}`
                                                        )
                                                    }
                                                />
                                            </li>

                                            <li class="nav-item">
                                                <a class="nav-link "> TEST </a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link "> TEST </a>
                                            </li>
                                        </ul>
                                    </div>

                                    <br />
                                </div>
                               
                            </div>
                        </div>
                    </div>
                    //+-+-+-ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ */}
            <div class="container">
                {/* -------------------------- */}
                <div class=" emp-profile">
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
                                    {/*                     <p class="proile-rating">
                        NOTE : <span>{note}</span>
                                            </p> */}

                                    <p class="proile-rating">
                                        DOCTOR :{" "}
                                        <span>
                                            {doctorFirstName} {doctorLastName}
                                        </span>
                                    </p>

                                    <div>
                                        <div class="profile-head">
                                            <ul class="nav nav-tabs ">
                                                <li class="nav-item">
                                                    <a class="nav-link "></a>
                                                </li>
                                                <li class="nav-item">
                                                    <input
                                                        type="submit"
                                                        class="profile-edit-btn nav-item"
                                                        name="btnAddMore"
                                                        value="ADD-COMMENT ...."
                                                        onClick={() =>
                                                            navigate(
                                                                `addCommentFromPatient/${patient_Id}`
                                                            )
                                                        }
                                                    />
                                                </li>

                                                <li class="nav-item">
                                                    <input
                                                        type="submit"
                                                        class="profile-edit-btn nav-item"
                                                        name="btnAddMore"
                                                        value="CHECK-DRUG ...."
                                                        onClick={() =>
                                                            navigate(
                                                                `/profile/prescriptionCheckUser/${patient_Id}`
                                                            )
                                                        }
                                                    />
                                                </li>

                                                <li class="nav-item">
                                                    <a class="nav-link ">
                                                        {" "}
                                                        TEST{" "}
                                                    </a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link ">
                                                        {" "}
                                                        TEST{" "}
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>

                                        <br />
                                    </div>
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
                                                Comment
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a
                                                class="nav-link"
                                                href="#profile"
                                                role="tab"
                                                aria-controls="profile"
                                            >
                                                Prescription
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-2">
                                <input
                                    type="submit"
                                    class="profile-edit-btn"
                                    name="btnAddMore"
                                    value="Edit Profile"
                                    onClick={() =>
                                        navigate(
                                            `/patientsList/${patient_Id}/patientsList/edit/${patient_Id}`
                                        )
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
//TODO: Check isArray?
/* 
 <div>
     {Array.isArray(comments)
         ? comments.map(
               (com) => {
                   return (
                       <h2>
                           {
                               com
                                   .medicine
                                   .medicineName
                           }
                       </h2>
                   );
               }
           )
         : null}
 </div> 
*/
/* 




    
    {/*                 <input
    type="submit"
    class="profile-edit-btn"
    name="btnAddMore"
    value="ADD-COMMENT"
    onClick={() =>
        navigate(
            `AddCommentFromPatient/${patient_Id}`
        )
    }
/>  
*/
