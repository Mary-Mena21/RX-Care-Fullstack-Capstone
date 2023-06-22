import React, { useEffect } from "react";
import { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";

export const DoctorEdit = () => {
    //const [Type, setType] = useState("");
    // const [Img, setImg] = useState("");
    // const [FirstName, setFirstName] = useState("");
    // const [LastName, setLastName] = useState("");
    // const [Email, setEmail] = useState("");
    // const [PATIENT, setPATIENT] = useState("");
    // const [UserId, setUserId] = useState("");
    // const [DoctorId, setDoctorId] = useState("");
    // const [DoB, setDoB] = useState("");
    // const [Address, setAddress] = useState("");
    // const [Phone, setPhone] = useState("");
    // const [Height, setHeight] = useState("");
    // const [Weight, setWeight] = useState("");
    // const [Note, setNote] = useState("");
    const navigate = useNavigate();

    const { doctor_Id } = useParams();
    const [doctor, setUpdatePatient] = useState({
        id: 0,
        userId: 0,
        doctorId: 0,
        doB: "",
        address: "",
        phone: "",
        height: 0,
        weight: 0,
        note: "",
        user: {
            id: 6,
            type: "Doctor",
            img: "",
            firstName: "",
            lastName: "",
            email: "",
        },
    });
//--------------------------------
var appUser = localStorage.getItem("app_user");
var appUserObject = JSON.parse(appUser);
console.log(appUserObject.type);
    const Type = appUserObject.type;
    console.log(Type)


    /* -------------Display----------------- */
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `https://localhost:7183/api/Doctor/GetDoctorFullInfo?Id=${doctor_Id}`
            );
            //console.log(bookEditId);
            const data = await response.json();
            setUpdatePatient(data);
            console.log(data);
        };
        fetchData();
    }, []);

    /* -------------Edit----------------- */
    const updatePatient = async (SendToAPI) => {
        const fetchOptions = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(SendToAPI),
        };
        const response = await fetch(
            `https://localhost:7183/api/Doctor/UpdatePatientById/${doctor_Id}`,
            fetchOptions
        );
        //navigate(`/books`);
        navigate(`/patientsList/${doctor_Id}`);
        const responseJson = await response.json();
        //console.log(responseJson);
        return responseJson;
    };

    const handleSaveButtonClick = (event) => {
        event.preventDefault();
        //fetchData();
        //navigate(`/patientsList/${doctor_Id}`);
        updatePatient(doctor);
    };
    //TODO: implement Rest of Doctor Form
    return (
        <>
            {/*  <div class="container register"> */}
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
                        value="Back to Doctor"
                        onClick={() =>
                            navigate(`../patientsList/${doctor_Id}`)
                        }
                    />
                        <br />
                    </div>
                    <div class="col-md-7 register-right">
                        <div class="tab-content" id="myTabContent">
                            <div id="home">
                                <h3 class="register-heading">Edit Doctor</h3>
                                <div class="row register-form">
                                    <div class="col-md-12">
                                        {/* ---------------------- */}

                                        <Form >
                                            <div className="row g-3">
                                                <Form.Floating className="form-group">
                                                    <Form.Control
                                                        required
                                                        autoFocus
                                                        type="text"
                                                        name="firstName"
                                                        placeholder="First Name"
                                                        value={doctor.user.firstName}
                                                        onChange={(evt) => {
                                                            const copy = { ...doctor };
                                                            copy.user.firstName= evt.target.value;
                                                            setUpdatePatient(copy);
                                                        }}
                                                    />
                                                    <label htmlFor="firstName">
                                                        First Name
                                                    </label>
                                                </Form.Floating>

                                                <Form.Floating className="form-group">
                                                    <Form.Control
                                                        required
                                                        autoFocus
                                                        type="text"
                                                        name="lastName"
                                                        placeholder="Last Name"
                                                        value={
                                                            doctor.user
                                                                .lastName
                                                        }
                                                        onChange={(evt) => {
                                                            const copy = { ...doctor };
                                                            copy.user.lastName= evt.target.value;
                                                            setUpdatePatient(copy);
                                                        }}
                                                    />
                                                    <label htmlFor="lastName">
                                                        Last Name
                                                    </label>
                                                </Form.Floating>

                                                <Form.Floating className="form-group  col-sm-6">
                                                    <Form.Control
                                                        required
                                                        autoFocus
                                                        type="date"
                                                        name="dob"
                                                        placeholder={
                                                            doctor.doB
                                                        }
                                                        value={new Date(doctor.doB).toLocaleDateString()}
                                                        // onChange={(evt) => {
                                                        //     new Date(DoB);
                                                        //     setUpdatePatient(
                                                        //         evt.target.value
                                                        //     );
                                                        // }}
                                                        onChange={(evt) => {
                                                            //new Date(doB);
                                                            const copy = { ...doctor };
                                                            copy.doB =  evt.target.value;
                                                            setUpdatePatient(copy);
                                                        }}
                                                    />
                                                    <label htmlFor="dob">
                                                        Date of Birth:{" "}
                                                        {doctor.doB}
                                                    </label>
                                                </Form.Floating>

                                                <Form.Floating className="form-group  col-sm-6">
                                                    <Form.Control
                                                        required
                                                        autoFocus
                                                        type="telephone"
                                                        name="phone"
                                                        placeholder="Cell phone"
                                                        //pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                                        value={doctor.phone}
                                                        onChange={(evt) => {
                                                            const copy = { ...doctor };
                                                            copy.phone= evt.target.value;
                                                            setUpdatePatient(copy);
                                                        }}
                                                    />
                                                    <label htmlFor="phone">
                                                        Cell phone
                                                    </label>
                                                </Form.Floating>

                                                <Form.Floating className="form-group ">
                                                    <Form.Control
                                                        required
                                                        autoFocus
                                                        type="email"
                                                        name="email"
                                                        placeholder="name@example.com"
                                                        value={
                                                            doctor.user.email
                                                        }
                                                        onChange={(evt) => {
                                                            const copy = { ...doctor };
                                                            copy.user.email= evt.target.value;
                                                            setUpdatePatient(copy);
                                                        }}
                                                    />
                                                    <label htmlFor="email">
                                                        Email address
                                                    </label>
                                                </Form.Floating>

                                                <Form.Floating className="form-group ">
                                                    <Form.Control
                                                        required
                                                        autoFocus
                                                        type="text"
                                                        name="address"
                                                        placeholder="Address"
                                                        value={doctor.address}
                                                        onChange={(evt) => {
                                                            const copy = { ...doctor };
                                                            copy.address= evt.target.value;
                                                            setUpdatePatient(copy);
                                                        }}
                                                    />
                                                    <label htmlFor="address">
                                                        Address
                                                    </label>
                                                </Form.Floating>

                                                {/*                                                 <Form.Floating
                                                    as={Col}
                                                    className="form-group  col-sm-6"
                                                > */}
                                                {/*  <Form.Label className="">
                                 upload Image 
                              </Form.Label>*/}
                                                {/*                                                     <Form.Control
                                                        aria-label="Large"
                                                        size="lg"
                                                        id="imgs"
                                                        type="file"
                                                        value={doctor.img}
                                                        accept="image/png,image/jpeg"
                                                        path="..\components\images"
                                                        files={Img}
                                                        onChange={(evt) =>
                                                            setImg(
                                                                evt.target
                                                                    .files[0]
                                                                    .name
                                                            )
                                                        }
                                                    />
                                                </Form.Floating> */}
                                                {appUserObject.type == "Doctor" ? (
                                                    <>
                                                <Form.Floating className="form-group  col-sm-6">
                                                    <Form.Select
                                                        required
                                                        value={doctor.doctorId}
                                                        className="form-select"
                                                        // onChange={(evt) =>
                                                        //     setUpdatePatient(
                                                        //         parseInt(
                                                        //             evt.target
                                                        //                 .value
                                                        //         )
                                                        //     )
                                                        // }

                                                        onChange={(evt) => {
                                                            const copy = { ...doctor };
                                                            copy.doctorId = parseInt(
                                                                evt.target.value
                                                            );
                                                            setUpdatePatient( copy );
                                                        }}

                                                    >
                                                        <option value="">
                                                            Open this select
                                                            menu
                                                        </option>
                                                        <option value="1">
                                                            Dr. John Doe
                                                        </option>
                                                        <option value="2">
                                                            Dr. Jane Smith
                                                        </option>
                                                        <option value="3">
                                                            Dr. Michael Johnson
                                                        </option>
                                                        <option value="4">
                                                            Dr. Emily Williams
                                                        </option>
                                                        <option value="5">
                                                            Dr. David Brown
                                                        </option>
                                                    </Form.Select>
                                                </Form.Floating>

                                                <Form.Floating className="form-group  col-sm-3">
                                                    <Form.Control
                                                        required
                                                        autoFocus
                                                        type="number"
                                                        name="height"
                                                        placeholder="Height"
                                                        value={doctor.height}
                                                        onChange={(evt) => {
                                                            const copy = { ...doctor };
                                                            copy.height= evt.target.value;
                                                            setUpdatePatient(copy);
                                                        }}
                                                    />
                                                    <label htmlFor="height">
                                                        Height
                                                    </label>
                                                </Form.Floating>

                                                <Form.Floating className="form-group  col-sm-3">
                                                    <Form.Control
                                                        required
                                                        autoFocus
                                                        type="number"
                                                        name="weight"
                                                        placeholder="Weight"
                                                        value={doctor.weight}
                                                        onChange={(evt) => {
                                                            const copy = { ...doctor };
                                                            copy.weight= evt.target.value;
                                                            setUpdatePatient(copy);
                                                        }}
                                                    />
                                                    <label htmlFor="weight">
                                                        Weight
                                                    </label>
                                                </Form.Floating>



                                                
                                                <Form.Floating className="form-group ">
                                                    <FloatingLabel
                                                        required
                                                        controlId="floatingTextarea2"
                                                        label="Leave a Note here"
                                                    >
                                                        
                                                        <Form.Control
                                                            as="textarea"
                                                            name="note"
                                                            value={doctor.note}
                                                            placeholder="Leave a Note here"
                                                            onChange={(evt) => {
                                                                const copy = { ...doctor };
                                                                copy.note= evt.target.value;
                                                                setUpdatePatient(copy);
                                                            }}
                                                            style={{
                                                                height: "100px",
                                                            }}
                                                        />
                                                    </FloatingLabel>
                                                </Form.Floating>
                                                </>
                                                ):("")}

                                            </div>
                                            {/* ---------------------- */}
{/*                                             <input
                                                type="submit"
                                                class="btnRegister"
                                                value="Register"
                                            /> */}

                                            <button
                                            onClick={(e) => handleSaveButtonClick(e)}
                                            className="btnRegister"
                                            type="submit"
                                        >
                                            Update Doctor
                                        </button>

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
