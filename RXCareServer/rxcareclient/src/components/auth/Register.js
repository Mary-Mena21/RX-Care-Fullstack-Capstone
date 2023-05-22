import { fireEvent } from "@testing-library/react";
import React from "react";
import { useEffect, useState } from "react";
import { Router } from "react-router-dom";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const Register = () => {
  //const [Type, setType] = useState("");
  const [Img, setImg] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [UserId, setUserId] = useState("");
  const [DoctorId, setDoctorId] = useState("");
  const [DoB, setDoB] = useState("");
  const [Address, setAddress] = useState("");
  const [Phone, setPhone] = useState("");
  const [Height, setHeight] = useState("");
  const [Weight, setWeight] = useState("");
  const [Note, setNote] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch(
        //`https://localhost:7183/addUser`
        `https://localhost:7183/AddRegisterUser`,
        {
          body: JSON.stringify({
            Type: "Patient",
            Img:Img,
            FirstName: FirstName,
            LastName: LastName,
            Email: Email
            // ,PATIENT: {
            //   UserId: UserId,
            //   DoctorId: DoctorId,
            //   DoB: DoB,
            //   Address: Address,
            //   Phone: Phone,
            //   Height: Height,
            //   Weight: Weight,
            //   Note: Note,
            // }
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
  };
//TODO: implement Rest of Patient Form
  return (
    <>
    {/*   <form onSubmit={submissionHandler}> */}
    <section className="form_container container col-lg-7">
    <h1 className="page_studentForm_form">Patient Form</h1>
            <fieldset className=" page_container_form">
                <form onSubmit={submissionHandler}>
                    <Form.Floating className="mb-2">
                        <Form.Control
                            required
                            autoFocus
                            type="text"
                            name="FirstName"
                            placeholder="First Name"
                            value={FirstName}
                            onChange={(evt) => setFirstName(evt.target.value)}
                        />
                        <label htmlFor="name">First Name</label>
                    </Form.Floating>

                    <Form.Floating className="mb-2">
                    <Form.Control
                        required
                        autoFocus
                        type="text"
                        name="LastName"
                        placeholder="Last Name"
                        value={LastName}
                        onChange={(evt) => setLastName(evt.target.value)}
                    />
                    <label htmlFor="name">Last Name</label>
                </Form.Floating>
            
                    <Form.Floating className="mb-2">
                        <Form.Control
                            required
                            autoFocus
                            type="email"
                            name="email"
                            placeholder="name@example.com"
                            value={Email}
                            onChange={(evt) => setEmail(evt.target.value)}
                        />
                        <label htmlFor="email">Email address</label>
                    </Form.Floating>

                    <Form.Floating className="mb-2">
                        <Form.Control
                            required
                            autoFocus
                            type="date"
                            name="dob"
                            placeholder="date"
                            value={DoB}
                            onChange={(evt) => {new Date(DoB); setDoB(evt.target.value)}}
                        />
                        <label htmlFor="date">Date of birth</label>
                    </Form.Floating>

                    <Form.Floating className="mb-2">
                        <Form.Control
                            required
                            autoFocus
                            type="telephone"
                            name="phone"
                            placeholder="Cell phone"
                            //pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            value={Phone}
                            onChange={(event) => setPhone(event.target.value)}
                        />
                        <label htmlFor="phone">Cell phone</label>
                    </Form.Floating>

                    <Form.Floating className="mb-2">
                        <Form.Group>
                            <Form.Label className="">
                                upload Image
                            </Form.Label>
                            <Form.Control
                  size="lg"
                  id="imgs"
                  type="file"
                  accept="image/png,image/jpeg"
                  path="..\components\images"
                  files={Img}
                  onChange={(evt) => setImg(evt.target.files[0].name)}
                            />
                        </Form.Group>
                    </Form.Floating>

                    <Button
                        className="button_form"
                        type="submit"
                        variant="secondary"
                        size="lg"
                    >
                        SUBMIT
                    </Button>
                </form>
            </fieldset>
        </section>

{/* 
      </form> */}
    </>
  );
};
{/*         <label>
          First Name:
          <input
            type="text"
            value={FirstName}
            onChange={(event) => setFirstName(event.target.value)}
          ></input>
        </label>

        <label>
          Last Name:
          <input
            type="text"
            value={LastName}
            onChange={(event) => setLastName(event.target.value)}
          ></input>
        </label>

        <label>
          Email:
          <input
            type="text"
            value={Email}
            onChange={(event) => setEmail(event.target.value)}
          ></input>
        </label>

        <label>
          Phone Number:
          <input
            type="text"
            value={PhoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
          ></input>
        </label>

        <label>
          Address Line One:
          <input
            type="text"
            value={AddressLineOne}
            onChange={(event) => setAddressLineOne(event.target.value)}
          ></input>
        </label>

        <label>
          Address Line Two:
          <input
            type="text"
            value={AddressLineTwo}
            onChange={(event) => setAddressLineTwo(event.target.value)}
          ></input>
        </label>

        <label>
          City:
          <input
            type="text"
            value={City}
            onChange={(event) => setCity(event.target.value)}
          ></input>
        </label>

        <label>
          State:
          <input
            type="text"
            value={State}
            onChange={(event) => setState(event.target.value)}
          ></input>
        </label>

        <label>
          Zip:
          <input
            type="text"
            value={Zip}
            onChange={(event) => setZip(event.target.value)}
          ></input>
        </label>

        <label>
          Password:
          <input
            type="text"
            value={PasswordHash}
            onChange={(event) => setPasswordHash(event.target.value)}
          ></input>
        </label>

        <label>
          <input type="submit" value="submit"></input>
        </label> */}