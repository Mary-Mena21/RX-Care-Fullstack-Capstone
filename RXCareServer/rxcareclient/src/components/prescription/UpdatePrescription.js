import React, { useEffect } from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import { useNavigate, useParams } from "react-router-dom";

export const UpdatePrescription = () => {
    const navigate = useNavigate();
    const {  patient_Id , Id } = useParams();
    console.log(patient_Id);
    console.log(Id);

    const [Prescription, setUpdatePrescription] = useState({
        //id: 0,
        medicineId: 0,
        dosage: "",
        quantity: 0,
        patientId: patient_Id,
        medicine: { medicineName: "" },
    });

    //------------------------Display------------FORM-----------------
    //https://localhost:7183/api/prescription/GetPrescriptionMedicineByPrescriptionId/34
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `https://localhost:7183/api/prescription/GetPrescriptionMedicineByPrescriptionId/${Id}`
                //`https://localhost:7183/api/prescription/PrescriptionByPrescriptionId/${Id}`
            );
            //console.log(bookEditId);
            const data = await response.json();
            setUpdatePrescription(data);
            console.log(data);
        };
        fetchData();
    }, []);
    /* -------------Edit----------------- */
    const fetchUpdatePrescription = async (SendToAPI) => {
        const fetchOptions = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(SendToAPI),
        };
        const response = await fetch(
            `https://localhost:7183/api/prescription/UpdatePrescriptionById/${Id}`,
            fetchOptions
            );
            console.log(Id);
        navigate(`../patientsList/${patient_Id}`);
        const responseJson = await response.json();
        //console.log(responseJson);
        return responseJson;
    };

    const submissionHandler = (event) => {
        event.preventDefault();
        fetchUpdatePrescription(Prescription);
    };

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
                                    Update  {Prescription.medicine.medicineName} Prescription
                                </h3>
                                <div class="row register-form">
                                    <div class="col-md-12">
                                        {/* ---------------------- */}
                                        <Form onSubmit={submissionHandler}>
                                            <div className="row g-3">
                                            <Form.Floating className="form-group  col-sm-8">
                                                <Form.Select
                                                disabled
                                                    value={
                                                        Prescription.medicineId
                                                    }
                                                    className="form-select"
                                                        onChange={(evt) => {
                                                        console.log(evt);
                                                        const copy = {
                                                            ...Prescription,
                                                            };
                                                        console.log(copy);
                                                            
                                                        copy.medicineId = parseInt(
                                                            evt.target.value
                                                        );
                                                        setUpdatePrescription(
                                                            copy
                                                            );
                                                            console.log(Prescription);

                                                    }}
                                                >
                                                    <option
                                                        value={
                                                            Prescription.medicineId
                                                        }
                                                    >
                                                    {Prescription.medicine.medicineName}
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
                                                <label htmlFor="select">
                                                Medicine Name
                                            </label>
                                            </Form.Floating>

                                                {/* ------------------------------- */}
                                                
                                                <Form.Floating className="form-group  col-sm-6">
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
                                                            setUpdatePrescription(
                                                                copy
                                                            );
                                                        }}
                                                    />
                                                    <label htmlFor="dosage">
                                                        Dosage
                                                    </label>
                                                </Form.Floating>

                                                <Form.Floating className="form-group  col-sm-6">
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
                                                            setUpdatePrescription(
                                                                copy
                                                            );
                                                        }}
                                                    />
                                                    <label htmlFor="quantity">
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
