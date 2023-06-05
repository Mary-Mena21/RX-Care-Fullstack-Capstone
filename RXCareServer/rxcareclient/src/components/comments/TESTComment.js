import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../profile/ProfilePatient.css";
import Accordion from "react-bootstrap/Accordion";

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
    console.log(Type)


    return (
        <>

                            <Accordion.Body>
                <div className="container active3">
                                    <h6>
                                    {MedicineName}Doctor
                                    </h6>
                                    <p class="profile-comment">{new Date(PCommentDate).toLocaleString()}</p>
                                    <p class="p-comment">P: {PComment}</p>
                                    <p class="profile-comment">{new Date(DCommentDate).toLocaleString()}</p>  
                    

                    <p class="p-comment">D: {DComment}</p>
                    {appUserObject.type == "Doctor" ? (
                                    <>
                                    <Link to={`UpdateComment/edit/${Id}`}>
                                        {" "}
                                        <input
                                            type="submit"
                                            class="profile-edit-btn-comment"
                                            name="btnAddMore"
                                            value="ADD-REPLY"
                                        />
                                    </Link>
                                    </>
                                    ):("")}
                                </div>
                            </Accordion.Body>
        </>
    );



};


// {/* <p>P:{new Date(DCommentDate).toLocaleDateString('en-GB', { timeZone: 'UTC' })}</p> */}
// {/*  <p class="proile-comment">{new Date(DCommentDate).toLocaleString()}</p>  */ }
// {/* <p class="proile-comment">{DCommentDate}</p>  */}