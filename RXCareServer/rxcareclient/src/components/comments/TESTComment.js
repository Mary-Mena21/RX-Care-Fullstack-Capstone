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
{/*     return (
        <>

                <Accordion.Body>
                    {<h5>medicineName:{MedicineName}</h5>}
                    <p>P:{PComment}whyyyyyyyy</p>
                    <p>D:{DComment}</p>
                </Accordion.Body>

        </>
    ); */}


    return (
        <>

                            <Accordion.Body>
                                <div className="container active">
                                    <h5>
                                        medicineName:{MedicineName}
                                        XXX
                                    </h5>
                                    <p>P:{PCommentDate}XXX</p>
                                    <p>D:{DComment}</p>

                                    <Link to={`/UpdateComment/edit/${Id}`}>
                                        {" "}
                                        <input
                                            type="submit"
                                            class="profile-edit-btn nav-item"
                                            name="btnAddMore"
                                            value="ADD-REPLY"
                                        />
                                    </Link>
                                </div>
                            </Accordion.Body>

        </>
    );



};
