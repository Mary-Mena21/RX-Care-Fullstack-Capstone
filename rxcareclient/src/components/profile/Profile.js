import { useEffect, useState } from "react";
//import { useParams } from "react-router-dom"
import React from "react";
import { PatientProfile } from "./ProfilePatient";
import { Link } from "react-router-dom";
import { DataTexture } from "three";
//import { User } from "./types";

export const Profile = () => {
    //const { userId } = useParams()
    const [user, setUser] = useState([]);
    // useState <
    // User >
    // {
    //     Id: 0,
    //     firstName: "",
    //     LastName: "",
    //     Patient: {
    //         Id: 0,
    //         userId: 0,
    //         doctorId: 0,
    //         DoB: "",
    //         Height: 0,
    //         Weight: 0,
    //     },
    // };

    //---------------------------------------------
    var appUser = localStorage.getItem("app_user");
    var appUserObject = JSON.parse(appUser);
    console.log(appUserObject.id);
    const Id = appUserObject.id;

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `https://localhost:7183/api/User/GetById/${Id}`
            );
            const singlePatient = await response.json();

            // const response = await fetch(
            setUser(singlePatient);
            //     `https://localhost:7183/api/User/GetById/${Id}`
            // ).then((response) => {
            //     //const singlePatient = response.json();
            //     console.log("Response: ", response.json());
            //     //setUser(response.json());
            // });

            console.log("singlePatient: ", singlePatient);
            // setUser(singlePatient);
            console.log(user);
        };
        fetchData();
    }, []);
    //console.log(user.patient.doB);
    //const userPatient = user.patient.doB
    //console.log(userPatient);
    // let PatientImg = Patient.img;
    // console.log(PatientImg);

    return (
        <>
            <div className="">
                {/*                         <section className="patient" key={`patient--${Id}`}>
        <Link to={`/patients/${Id}`}>
             <img src={require(`../images/${patientImg}`)} className="patientImg" /> 
        <h5>
            {FirstName} {LastName}
        </h5>
    </section>   */}
                {/* -------------------------- */}
                <PatientProfile
                    Img={user.img}
                    FirstName={user.firstName}
                    LastName={user.lastName}
                    Email={user.email}
                    //DoB={user.patient.doB}
                />
                {/* -------------------------- */}
                {/*  <h5>Dob: {user?.patient?.doB}</h5> */}
            </div>
        </>
    );
};
