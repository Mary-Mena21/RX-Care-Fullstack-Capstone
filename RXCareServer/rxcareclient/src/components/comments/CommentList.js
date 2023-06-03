import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../profile/ProfilePatient.css";
import Accordion from "react-bootstrap/Accordion";
import { Comment } from "./Comment";

export const CommentList = ({ patient_Id }) => {
    const [comment, setComment] = useState([]);
    const [Medicine, setMedicine] = useState([]);
    console.log(patient_Id);
    /* -------------Display CommentList----------------- */
    //TODO: Solution for null comment : if (Comments == null) { return NotFound(); } added in CommentController
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                //`https://localhost:7183/api/Comment/${patient_Id}`
                `https://localhost:7183/api/Comment/commentOnMedicine/${patient_Id}`
            );
            const CommentData = await response.json();
            setComment(CommentData);
            console.log(CommentData);
        };
        fetchData();
    }, []);
    //-----------------------------------------------------
//TODO: DISPLAY CommentList----------------
    return(<>
            <Accordion.Item eventKey="1">
                <Accordion.Header>COMMENTS</Accordion.Header>

                    {comment.map((com) => {
                        console.log(com);
                        return (
                            <>
                            <Accordion.Body>
                                <h5>
                                    medicineName:{com.medicine.medicineName}
                                </h5>
                                <p>P:{com.pComment}</p>
                                <p>D:{com.dComment}</p>
                                </Accordion.Body>
                            </>
                        );
                    })}
  
            </Accordion.Item>
        </>)

};




/*     (
        <>
{            <section key={`books`} className="books">
                {comment.map((com) => {
                    return (
                        <>
                            <Comment
                                patient_Id={patient_Id}
                                medicineId={com?.medicineId}
                                pComment={com?.pComment}
                                pCommentDate={com?.pCommentDate}
                                dComment={com?.dComment}
                                dCommentDate={com?.dCommentDate}
                                medicineName={com?.medicine?.medicineName}
                            />
                        </>
                    );
                })}
            </section>}
        </>
    ); */