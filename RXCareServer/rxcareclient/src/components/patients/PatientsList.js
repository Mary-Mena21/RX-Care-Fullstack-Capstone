import { useEffect, useState } from "react";
import React from "react";
//import "./Patient.css";
import { Patient } from "./Patient";

export const PatientsList = () => {
    const [Patients, setPatients] = useState([]);
    const [searchTerms, setSearchTerms] = useState("");

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

            //searchByName------------------------------------------
            const searchByName = PatientsData.filter((person) =>
                person.user.firstName
                    .toLowerCase()
                    .startsWith(searchTerms.toLowerCase())
            );
            setPatients(searchByName);
        };
        fetchData();
    }, [searchTerms]);
    console.log(Patients);
    return (
        <>
            <div className="container ">
                {/* ------------search----1--------- */}
{/*                 <nav class="navbar fixed-top navbar-expand-lg navbar-dark">
                    <div class="container">
                        <div class="col-md-2 mr-sm-3"></div>
                        <div class="navbar-collapse search">
                            <form class="form-inline my-2 my-lg-3 col-md-4">
                                <input
                                    class="myform-control mr-sm-2"
                                    type="search"
                                    placeholder="find patient ..."
                                    aria-label="Search"
                                    onChange={(e) =>
                                        setSearchTerms(e.target.value)
                                    }
                                />
                                <button class="btn btn-light">
                                    <i class="fa fa-search"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </nav> */}
                {/* ------------search------------- */}

                {/* ------------search-----2-------- */}
                <h1 class=" col-md-4 ml-auto search-text ">PATIENT LIST</h1>
                <form class="form-inline   col-md-4 search ml-auto">
                    <input
                        class="myform-control mr-sm-2"
                        type="search"
                        placeholder="find doctor ..."
                        aria-label="Search"
                        onChange={(e) => setSearchTerms(e.target.value)}
                    />
                    <button class="btn btn-light">
                        <i class="fa fa-search"></i>
                    </button>
                </form>
                {/* ------------search------------- */}

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
