import { fireEvent } from "@testing-library/react";
import React from "react";
import { useEffect, useState } from "react";
import { Router } from "react-router-dom";

export const Register = () => {
  const [Type, setType] = useState("");
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
        `https://localhost:7183/addUser`,
        {
          body: JSON.stringify({
            Type: Type,
            Img:Img,
            FirstName: FirstName,
            LastName: LastName,
            Email: Email,
            PATIENT: {
              UserId: UserId,
              DoctorId: DoctorId,
              DoB: DoB,
              Address: Address,
              Phone: Phone,
              Height: Height,
              Weight: Weight,
              Note: Note,
            }
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
//TODO: implement Patient Form
  return (
    <>
      <form onSubmit={submissionHandler}>
        <h1>Patient Form</h1>
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
      </form>
    </>
  );
};
