// import { fireEvent } from "@testing-library/react";
import React from "react";
import { useState } from "react";
// import { Router } from "react-router-dom";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, Navigate, useNavigate } from "react-router-dom";

export const Register = () => {
    //const [Type, setType] = useState("");
    const [Img, setImg] = useState("");
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [Email, setEmail] = useState("");
    const [PATIENT, setPATIENT] = useState("");
    const [UserId, setUserId] = useState("");
    const [DoctorId, setDoctorId] = useState("");
    const [DoB, setDoB] = useState("");
    const [Address, setAddress] = useState("");
    const [Phone, setPhone] = useState("");
    const [Height, setHeight] = useState("");
    const [Weight, setWeight] = useState("");
    const [Note, setNote] = useState("");
    const navigate = useNavigate();

    const fetchData = async () => {
        try {
            const response = await fetch(
                `https://localhost:7183/addUser`,
                //`https://localhost:7183/AddRegisterUser`,
                {
                    body: JSON.stringify({
                        Type: "Patient",
                        Img: Img,
                        FirstName: FirstName,
                        LastName: LastName,
                        Email: Email,
                        PATIENT: {
                            DoctorId: DoctorId,
                            DoB: DoB,
                            Address: Address,
                            Phone: Phone,
                            Height: Height,
                            Weight: Weight,
                            Note: Note,
                        },
                    }),
                    credentials: "include",
                    method: "post",
                    headers: { "Content-Type": "application/json" },
                }
            );

            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    const submissionHandler = (event) => {
        event.preventDefault();
        fetchData();
        navigate("../Home");
    };
    //TODO: implement Rest of Patient Form
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
                            value="Login"
                            onClick={() => navigate("../login")}
                        />
                        <br />
                    </div>
                    <div class="col-md-7 register-right">
                        <div class="tab-content" id="myTabContent">
                            <div id="home">
                                <h3 class="register-heading">
                                    Register as a New Patient
                                </h3>
                                <div class="row register-form">
                                    <div class="col-md-12">
                                        {/* ---------------------- */}

                                        <Form onSubmit={submissionHandler}>
                                            <div className="row g-3">
                                                <Form.Floating className="form-group">
                                                    <Form.Control
                                                        required
                                                        autoFocus
                                                        type="text"
                                                        name="FirstName"
                                                        placeholder="First Name"
                                                        value={FirstName}
                                                        onChange={(evt) =>
                                                            setFirstName(
                                                                evt.target.value
                                                            )
                                                        }
                                                    />
                                                    <label htmlFor="name">
                                                        First Name
                                                    </label>
                                                </Form.Floating>

                                                <Form.Floating className="form-group">
                                                    <Form.Control
                                                        required
                                                        autoFocus
                                                        type="text"
                                                        name="LastName"
                                                        placeholder="Last Name"
                                                        value={LastName}
                                                        onChange={(evt) =>
                                                            setLastName(
                                                                evt.target.value
                                                            )
                                                        }
                                                    />
                                                    <label htmlFor="name">
                                                        Last Name
                                                    </label>
                                                </Form.Floating>

                                                {/*                         </Col>
            </Row> */}

                                                <Form.Floating className="form-group  col-sm-6">
                                                    <Form.Control
                                                        required
                                                        autoFocus
                                                        type="date"
                                                        name="dob"
                                                        placeholder="date"
                                                        value={PATIENT.DoB}
                                                        onChange={(evt) => {
                                                            new Date(DoB);
                                                            setDoB(
                                                                evt.target.value
                                                            );
                                                        }}
                                                    />
                                                    <label htmlFor="date">
                                                        Date of birth
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
                                                        value={PATIENT.Phone}
                                                        onChange={(event) =>
                                                            setPhone(
                                                                event.target
                                                                    .value
                                                            )
                                                        }
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
                                                        value={Email}
                                                        onChange={(evt) =>
                                                            setEmail(
                                                                evt.target.value
                                                            )
                                                        }
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
                                                        name="Address"
                                                        placeholder="Address"
                                                        value={PATIENT.Address}
                                                        onChange={(evt) =>
                                                            setAddress(
                                                                evt.target.value
                                                            )
                                                        }
                                                    />
                                                    <label htmlFor="Address">
                                                        Address
                                                    </label>
                                                </Form.Floating>

                                                <Form.Floating
                                                    as={Col}
                                                    className="form-group  col-sm-6"
                                                >
                                                    {/*  <Form.Label className="">
                                 upload Image 
                              </Form.Label>*/}
                                                    <Form.Control
                                                        aria-label="Large"
                                                        size="lg"
                                                        id="imgs"
                                                        type="file"
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
                                                </Form.Floating>

                                                <Form.Floating className="form-group  col-sm-6">
                                                    <Form.Select
                                                        required
                                                        value={PATIENT.DoctorId}
                                                        className="form-select"
                                                        onChange={(evt) =>
                                                            setDoctorId(
                                                                parseInt(
                                                                    evt.target
                                                                        .value
                                                                )
                                                            )
                                                        }
                                                    >
                                                        <option value="">
                                                            Open this select
                                                            menu
                                                        </option>
                                                        <option value="1">
                                                            Dr.John Doe
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

                                                <Form.Floating className="form-group  col-sm-6">
                                                    <Form.Control
                                                        required
                                                        autoFocus
                                                        type="number"
                                                        name="Height"
                                                        placeholder="Height"
                                                        value={PATIENT.Height}
                                                        onChange={(evt) =>
                                                            setHeight(
                                                                evt.target.value
                                                            )
                                                        }
                                                    />
                                                    <label htmlFor="Height">
                                                        Height
                                                    </label>
                                                </Form.Floating>

                                                <Form.Floating className="form-group  col-sm-6">
                                                    <Form.Control
                                                        required
                                                        autoFocus
                                                        type="number"
                                                        name="Weight"
                                                        placeholder="Weight"
                                                        value={PATIENT.Weight}
                                                        onChange={(evt) =>
                                                            setWeight(
                                                                evt.target.value
                                                            )
                                                        }
                                                    />
                                                    <label htmlFor="Weight">
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
                                                            name="Note"
                                                            value={PATIENT.Note}
                                                            placeholder="Leave a Note here"
                                                            onChange={(evt) =>
                                                                setNote(
                                                                    evt.target
                                                                        .value
                                                                )
                                                            }
                                                            style={{
                                                                height: "100px",
                                                            }}
                                                        />
                                                    </FloatingLabel>
                                                </Form.Floating>
                                            </div>
                                            {/* ---------------------- */}
                                            <input
                                                type="submit"
                                                class="btnRegister"
                                                value="Register"
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

// /*  {/*   <form onSubmit={submissionHandler}> */}
// <section className="form_container container col-lg-10">
// <h1 className="">Patient Form</h1>
// <fieldset className="">
//     <Form onSubmit={submissionHandler}>
//         {/*             <Row className="g-2">
// <Col md> */}
//         <Row className="g-2">
//             <Form.Floating as={Col} className="mb-1col-sm-6">
//                 <Form.Control
//                     required
//                     autoFocus
//                     type="text"
//                     name="FirstName"
//                     placeholder="First Name"
//                     value={FirstName}
//                     onChange={(evt) =>
//                         setFirstName(evt.target.value)
//                     }
//                 />
//                 <label htmlFor="name">First Name</label>
//             </Form.Floating>

//             <Form.Floating as={Col} className="mb-1col-sm-6">
//                 <Form.Control
//                     required
//                     autoFocus
//                     type="text"
//                     name="LastName"
//                     placeholder="Last Name"
//                     value={LastName}
//                     onChange={(evt) =>
//                         setLastName(evt.target.value)
//                     }
//                 />
//                 <label htmlFor="name">Last Name</label>
//             </Form.Floating>
//         </Row>
//         {/*                         </Col>
// </Row> */}

//         <Row className="g-2">
//             <Form.Floating as={Col} className="mb-1col-sm-6">
//                 <Form.Control
//                     required
//                     autoFocus
//                     type="date"
//                     name="dob"
//                     placeholder="date"
//                     value={PATIENT.DoB}
//                     onChange={(evt) => {
//                         new Date(DoB);
//                         setDoB(evt.target.value);
//                     }}
//                 />
//                 <label htmlFor="date">Date of birth</label>
//             </Form.Floating>

//             <Form.Floating as={Col} className="mb-1col-sm-6">
//                 <Form.Control
//                     required
//                     autoFocus
//                     type="telephone"
//                     name="phone"
//                     placeholder="Cell phone"
//                     //pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
//                     value={PATIENT.Phone}
//                     onChange={(event) =>
//                         setPhone(event.target.value)
//                     }
//                 />
//                 <label htmlFor="phone">Cell phone</label>
//             </Form.Floating>

//             <Form.Floating className="mb-2">
//                 <Form.Control
//                     required
//                     autoFocus
//                     type="email"
//                     name="email"
//                     placeholder="name@example.com"
//                     value={Email}
//                     onChange={(evt) =>
//                         setEmail(evt.target.value)
//                     }
//                 />
//                 <label htmlFor="email">Email address</label>
//             </Form.Floating>

//             <Form.Floating className="mb-2">
//                 <Form.Control
//                     required
//                     autoFocus
//                     type="text"
//                     name="Address"
//                     placeholder="Address"
//                     value={PATIENT.Address}
//                     onChange={(evt) =>
//                         setAddress(evt.target.value)
//                     }
//                 />
//                 <label htmlFor="Address">Address</label>
//             </Form.Floating>

//             <Form.Floating as={Col} className="mb-1col-sm-6">
//                 {/*  <Form.Label className="">
//                    upload Image
//                 </Form.Label>*/}
//                 <Form.Control
//                     aria-label="Large"
//                     size="lg"
//                     id="imgs"
//                     type="file"
//                     accept="image/png,image/jpeg"
//                     path="..\components\images"
//                     files={Img}
//                     onChange={(evt) =>
//                         setImg(evt.target.files[0].name)
//                     }
//                 />
//             </Form.Floating>

//             <Form.Floating as={Col} className="mb-1col-sm-6">
//                 <Form.Select
//                     required
//                     value={PATIENT.DoctorId}
//                     className="form-select"
//                     onChange={(evt) =>
//                         setDoctorId(parseInt(evt.target.value))
//                     }
//                 >
//                     <option value="">
//                         Open this select menu
//                     </option>
//                     <option value="1">Dr.John Doe</option>
//                     <option value="2">Dr. Jane Smith</option>
//                     <option value="3">
//                         Dr. Michael Johnson
//                     </option>
//                     <option value="4">
//                         Dr. Emily Williams
//                     </option>
//                     <option value="5">Dr. David Brown</option>
//                 </Form.Select>
//             </Form.Floating>
//         </Row>

//         <Row className="g-2">
//             <Form.Floating as={Col} className="mb-1col-sm-6">
//                 <Form.Control
//                     required
//                     autoFocus
//                     type="number"
//                     name="Height"
//                     placeholder="Height"
//                     value={PATIENT.Height}
//                     onChange={(evt) =>
//                         setHeight(evt.target.value)
//                     }
//                 />
//                 <label htmlFor="Height">Height</label>
//             </Form.Floating>

//             <Form.Floating cas={Col} className="mb-1col-sm-6">
//                 <Form.Control
//                     required
//                     autoFocus
//                     type="number"
//                     name="Weight"
//                     placeholder="Weight"
//                     value={PATIENT.Weight}
//                     onChange={(evt) =>
//                         setWeight(evt.target.value)
//                     }
//                 />
//                 <label htmlFor="Weight">Weight</label>
//             </Form.Floating>
//         </Row>

//         <Form.Floating className="mb-2">
//             <FloatingLabel
//                 required
//                 controlId="floatingTextarea2"
//                 label="Leave a Note here"
//             >
//                 <Form.Control
//                     as="textarea"
//                     name="Note"
//                     value={PATIENT.Note}
//                     placeholder="Leave a Note here"
//                     onChange={(evt) =>
//                         setNote(evt.target.value)
//                     }
//                     style={{ height: "100px" }}
//                 />
//             </FloatingLabel>
//         </Form.Floating>

//         <Button
//             className="button_form"
//             type="submit"
//             variant="secondary"
//             size="lg"
//         >
//             SUBMIT
//         </Button>
//     </Form>
// </fieldset>
// </section>
// {/*
// </form> */} */
