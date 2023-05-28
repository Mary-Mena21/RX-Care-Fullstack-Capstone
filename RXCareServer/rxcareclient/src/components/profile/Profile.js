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
    const [user2, setUser2] = useState([]);
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
            setUser(singlePatient);    
            const Patient = singlePatient.patient;
            setUser2(Patient)
        };
        fetchData();
    }, []);

    return (
        <>
            <div className="">
                {/* -------------------------- */}
                <PatientProfile
                    Img={user.img}
                    FirstName={user.firstName}
                    LastName={user.lastName}
                    Email={user.email}
                    DoB={user2.doB}
                />
                {/* -------------------------- */}
            </div>
        </>
    );
};
