import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "../profile/ProfilePatient.css";
import Accordion from "react-bootstrap/Accordion";
import { UserImg } from "../user/UserImg";

export const TESTComment = ({
    Id,
    PatientId,
    patient_Id,
    PComment,
    PCommentDate,
    DComment,
    DCommentDate,
    MedicineName,
}) => {
    //--------------------------------
    var appUser = localStorage.getItem("app_user");
    var appUserObject = JSON.parse(appUser);
    console.log(appUserObject.type);
    const Type = appUserObject.type;
    console.log(Type);
    console.log(Id);
    const navigate = useNavigate();
    /* -------------Delete Comment----------------- */
    const handleDelete = (e) => {
        //e.preventDefault();
        fetch(` https://localhost:7183/api/Comment/DeleteCommentById/${Id}`, {
            method: "DELETE",
        }).then(navigate(`../profile2`));
        //}).then(navigate(`../patientsList/${PatientId}`));
        //profile2
    };

    return (
        <>
            
                <div className=" active3 container">
                    <div>
                     <p class=" profile-tab">{MedicineName}</p>
                        {/* <p class="profile-comment">{new Date(PCommentDate).toLocaleString()}</p> */}
                    <p class="p-comment pd-comment">✋{PComment}</p>
                        <br />
                        {/* <p class="profile-comment">{new Date(DCommentDate).toLocaleString()}</p> */}
                        <p class="d-comment pd-comment">{DComment} 🩺 </p>
                    </div>

                    {appUserObject.type == "Doctor" ? (
                        <>
                            <Link to={`UpdateComment/edit/${Id}`}>
                                {" "}
                                <input
                                    type="submit"
                                    class="profile-edit-btn-comment margin-ptn"
                                    name="btnAddMore"
                                    value="ADD-REPLY"
                                />
                            </Link>
                        </>
                    ) : (
                        ""
                    )}

                    {appUserObject.type == "Patient" ? (
                        <>
                            <input
                                type="submit"
                                class="profile-edit-btn-comment float-ptn margin-ptn"
                                name="btnAddMore"
                                value="Delete"
                                onClick={(click) => {
                                    window.confirm(
                                        `Are you sure you want to delete Comment ${Id}?`
                                    ) && handleDelete(click);
                                }}
                            />
                        </>
                    ) : (
                        ""
                    )}
                </div>
            
        </>
    );
};

// {/* <p>P:{new Date(DCommentDate).toLocaleDateString('en-GB', { timeZone: 'UTC' })}</p> */}
// {/*  <p class="proile-comment">{new Date(DCommentDate).toLocaleString()}</p>  */ }
// {/* <p class="proile-comment">{DCommentDate}</p>  */}
