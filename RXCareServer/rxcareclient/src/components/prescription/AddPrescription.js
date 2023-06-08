import React from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import { useNavigate, useParams } from "react-router-dom";

export const AddPrescription = () => {
    console.log(patient_Id);

    const navigate = useNavigate();
    const { patient_Id } = useParams();

    const [Prescription, setAddPrescription] = useState({
        //id: 0,
        medicineId: 0,
        dosage: "",
        quantity: 0,
        patientId: patient_Id,
        active: true,
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
            `https://localhost:7183/AddPrescription`,
            fetchOptions
        );
        navigate(`../patientsList/${patient_Id}`);
        const responseJson = await response.json();
        return responseJson;
    };
    /* ------------------------------ */
    const submissionHandler = (event) => {
        event.preventDefault();
        fetchData(Prescription);
    };
    // //TODO: implement Rest of Patient Form
    /* ------------------------------ */

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
                                    Add new Prescription
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
                                                            Prescription.medicineId
                                                        }
                                                        className="form-select"
                                                        onChange={(evt) => {
                                                            const copy = {
                                                                ...Prescription,
                                                            };
                                                            copy.medicineId = parseInt(
                                                                evt.target.value
                                                            );

                                                            setAddPrescription(
                                                                copy
                                                            );
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

                                                <Form.Floating className="form-group  col-sm-8">
                                                    <Form.Control
                                                        required
                                                        autoFocus
                                                        type="text"
                                                        name="dosage"
                                                        placeholder="dosage"
                                                        value={
                                                            Prescription.dosage
                                                        }
                                                        onChange={(evt) => {
                                                            const copy = {
                                                                ...Prescription,
                                                            };
                                                            copy.dosage =
                                                                evt.target.value;
                                                            setAddPrescription(
                                                                copy
                                                            );
                                                        }}
                                                    />
                                                    <label htmlFor="Dosage">
                                                        Dosage
                                                    </label>
                                                </Form.Floating>

                                                <Form.Floating className="form-group  col-sm-8">
                                                    <Form.Control
                                                        required
                                                        autoFocus
                                                        type="number"
                                                        name="quantity"
                                                        placeholder="quantity"
                                                        value={
                                                            Prescription.quantity
                                                        }
                                                        onChange={(evt) => {
                                                            const copy = {
                                                                ...Prescription,
                                                            };
                                                            copy.quantity =
                                                                evt.target.value;
                                                            setAddPrescription(
                                                                copy
                                                            );
                                                        }}
                                                    />
                                                    <label htmlFor="Quantity">
                                                        Quantity
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
