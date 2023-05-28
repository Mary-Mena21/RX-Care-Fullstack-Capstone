import { useEffect, useState } from "react";
import React from "react";
import "./Patient.css";
import { Patient } from "./Patient";

export const PatientsList = () => {
    const [Patients, setPatients] = useState([]);

    //---------------------------------------------
    var appUser = localStorage.getItem("app_user");
    var appUserObject = JSON.parse(appUser);
    console.log(appUserObject.id);
    /* ------------GetAllPatients--------------- */
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `https://localhost:7183/api/Patient/All/${appUserObject.id}`
            );
            const PatientsData = await response.json();
            setPatients(PatientsData);
            console.log(PatientsData);
        };
        fetchData();
    }, []);
    console.log(Patients);
    return (
        <>
            <div className="container ">
                <h1>All Patients</h1>
                <section key={`Patients`} className="patients patientContainer">
                    {Patients.map((patient) => {
                        return (
                            <>
                                <Patient
                                    Id={patient.id}
                                    Address={patient.address}
                                    DoB={patient.doB}
                                    Height={patient.height}
                                    Note={patient.note}
                                    Phone={patient.phone}
                                    Img={patient.user.img}
                                    FirstName={patient.user.firstName}
                                    LastName={patient.user.lastName}
                                    Email={patient.user.email}
                                />
                            </>
                        );
                    })}
                </section>
            </div>
        </>
    );
};