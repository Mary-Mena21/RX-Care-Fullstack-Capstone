import { fireEvent } from "@testing-library/react";
import React from "react";
import { useEffect, useState } from "react";
import { Router } from "react-router-dom";

export const Register = () => {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Img, setImg] = useState("");
  const [Type, setType] = useState("");
  //const [PasswordHash, setPasswordHash] = useState("");
  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://localhost:7229/api/Login/RegisterUser`,
        {
          body: JSON.stringify({
            FirstName: FirstName,
            LastName: LastName,
            Email: Email,
            Img: Img,
            Type: Type,
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

  return (
    <>
      <form onSubmit={submissionHandler}>
        <label>
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
          Image:
          <input
            type="text"
            value={Img}
            onChange={(event) => setPhoneNumber(event.target.value)}
          ></input>
        </label>

        <label>
        Type:
          <input
            type="text"
            value={Type}
            onChange={(event) => setAddressLineOne(event.target.value)}
          ></input>
        </label>

        <label>
          <input type="submit" value="submit"></input>
        </label>
      </form>
    </>
  );
};
