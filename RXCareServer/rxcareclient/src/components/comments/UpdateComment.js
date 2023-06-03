import React from "react";
import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { useNavigate, useParams } from "react-router-dom";

export const UpdateComment = () => {
    console.log(patient_Id);

    const navigate = useNavigate();
    const { patient_Id } = useParams();
    const [comment, setComment] = useState([]);
    const [Prescription, setPrescription] = useState([]);

    const [Comment, setAddComment] = useState({
        patientId: patient_Id,
        medicineId: 0,
        pComment: "comment",
        pCommentDate: new Date().toISOString(),
        dComment: "",
        dCommentDate: new Date().toISOString(),
    });
    /* --------------AddComment---------------- */
    const fetchData = async (SendToAPI) => {
        const fetchOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(SendToAPI),
        };
        console.log(fetchOptions);
        const response = await fetch(
            `https://localhost:7183/api/Comment`,
            fetchOptions
        );
        navigate(`../patientsList/${patient_Id}`);
        const responseJson = await response.json();
        return responseJson;
    };

    const submissionHandler = (event) => {
        event.preventDefault();
        fetchData(Comment);
    };
    // //TODO: implement Rest of Patient Form
    /* -------------Display CommentList----------------------- */
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

    /* -------------Display PrescriptionList----------------- */
        useEffect(() => {
            const fetchData = async () => {
                const response = await fetch(
                    `https://localhost:7183/api/prescription/Patient/${patient_Id}`
                );
                const PrescriptionListArray = await response.json();
                setPrescription(PrescriptionListArray);
                console.log(PrescriptionListArray);
            };
            fetchData();
        }, []);
    //-----------------------------------------------------

    return (
        <>
            <div class=" register">
                <div class="row g-3">
                    <div class="col-md-3 register-left">
                        <img
                            src="https://image.ibb.co/n7oTvU/logo_white.png"
                            alt=""
                        />
                        <h3>Welcome</h3>
                        <p>RX-Care Your Health Gard!</p>
                        <input
                            type="submit"
                            name=""
                            value="Back to Patient"
                            onClick={() =>
                                navigate(`../patientsList/${patient_Id}`)
                            }
                        />
                        <br />
                    </div>

                    <div class="col-md-7 register-right">
                        <div class="tab-content" id="myTabContent">
                            <div id="home">
                                <h3 class="register-heading">
                                    Add new Comment [To EDIT]
                                </h3>
                                <div class="row register-form">
                                    <div class="col-md-12">
                                        {/* ---------------------- */}

                                        <Form onSubmit={submissionHandler}>
                                            <div className="row g-3">
                                                 <Form.Floating className="form-group  col-sm-8">
                                                    <Form.Select
                                                        required
                                                        value={
                                                            Comment.medicineId
                                                        }
                                                        className="form-select"
                                                        onChange={(evt) => {
                                                            const copy = {
                                                                ...Comment,
                                                            };
                                                            copy.medicineId = parseInt(
                                                                evt.target.value
                                                            );

                                                            setAddComment(copy);
                                                        }}
                                                    >
                                                        <option value="">
                                                            Open this select
                                                            menu
                                                        </option>
                                                        <option value="1">
                                                            Levothyroxine
                                                        </option>
                                                        <option value="2">
                                                            Amoxicillin
                                                        </option>
                                                        <option value="3">
                                                            Bisoprolol
                                                        </option>
                                                        <option value="4">
                                                            Irinotecan
                                                        </option>
                                                        <option value="5">
                                                            MediHoney
                                                        </option>
                                                        <option value="6">
                                                            TheraTears
                                                        </option>
                                                    </Form.Select>
                                                </Form.Floating> 

                                               {/*  //----------------------Medicine Options----------------------------- */}
{/*                                                  <Form.Floating className="form-group  col-sm-8">
                                                    <Form.Select
                                                        required
                                                        value={
                                                            Comment.medicineId
                                                        }
                                                        className="form-select"
                                                        onChange={(evt) => {
                                                            const copy = {
                                                                ...Comment,
                                                            };
                                                            copy.medicineId = parseInt(
                                                                evt.target.value
                                                            );

                                                            setAddComment(copy);
                                                        }}
                                                    >
                                                        {Prescription.map((pre) => {
                                                        console.log(comment);
                                                        return <>
                                                        <option value={pre.medicineId}>
                                                        {pre.medicine.medicineName}
                                                    </option>
                                                        
                                                        </>;
                                                    })}                                                       
                                                    </Form.Select>
                                                </Form.Floating>  */}

                                                {/* //----------------------P------------------------------- */}
{/*                                                 <Form.Floating className="form-group  col-sm-8">
                                                <Form.Control
                                                    required
                                                    autoFocus
                                                    type="text"
                                                    name="pComment"
                                                    placeholder="pComment"
                                                    value={
                                                        Comment.pComment
                                                    }
                                                    onChange={(evt) => {
                                                        const copy = {
                                                            ...Comment,
                                                        };
                                                        copy.pComment =
                                                            evt.target.value;
                                                        setAddComment(
                                                            copy
                                                        );
                                                    }}
                                                />
                                                <label htmlFor="pComment">
                                                Patient Comment
                                                </label>
                                            </Form.Floating> */}
                                                {/* //----------------------D------------------------------- */}

                                                <Form.Floating className="form-group  col-sm-8">
                                                    <Form.Control
                                                        required
                                                        autoFocus
                                                        type="text"
                                                        name="dComment"
                                                        placeholder="dComment"
                                                        value={Comment.dComment}
                                                        onChange={(evt) => {
                                                            const copy = {
                                                                ...Comment,
                                                            };
                                                            copy.dComment =
                                                                evt.target.value;
                                                            setAddComment(copy);
                                                        }}
                                                    />
                                                    <label htmlFor="dComment">
                                                        Doctor Comment
                                                    </label>
                                                </Form.Floating>
                                            </div>
                                            {/* ---------------------- */}
                                            <input
                                                type="submit"
                                                class="btnRegister"
                                                value="Submit"
                                            />
                                        </Form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
/* 
  "id": 0,
  "patientId": 0,
  "medicineId": 0,
  "pComment": "string",
  "pCommentDate": "2023-06-02T18:41:21.332Z",
  "dComment": "string",
  "dCommentDate": "2023-06-02T18:41:21.332Z"
*/
//https://localhost:7183/api/Comment
