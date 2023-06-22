import { useEffect, useState } from "react";
import React from "react";
import "./doctor.css";
import { Doctor } from "./Doctor";
import { Footer } from "../footer/Footer";

export const DoctorsList = () => {
    const [Doctors, setDoctors] = useState([]);
    const [searchTerms, setSearchTerms] = useState("");

    //---------------------------------------------
    var appUser = localStorage.getItem("app_user");
    var appUserObject = JSON.parse(appUser);
    console.log(appUserObject);
    /* ------------GetAllDoctors--------------- */
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                //`https://localhost:7183/api/User/GetDoctorList`
                `https://localhost:7183/api/Doctor/GetDoctorsInformationProfileList`
            );
            const DoctorsData = await response.json();
            setDoctors(DoctorsData);
            console.log(DoctorsData);

            //searchByName------------------------------------------
            const searchByName = DoctorsData.filter((person) =>
                person.firstName
                    .toLowerCase()
                    .startsWith(searchTerms.toLowerCase())
            );
            setDoctors(searchByName);
        };
        fetchData();
    }, [searchTerms]);
    console.log(Doctors);
    return (
        <>
            <div class="container ">
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
                {/* ------------search----2--------- */}
                <h1 class=" col-md-4 ml-auto search-text ">PROVIDER LIST</h1>
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
                <section
                    key={`Doctors`}
                    className="Doctors doctorContainer register-container"
                >
                    {Doctors.map((doctor) => {
                        return (
                            <>
                                <Doctor
                                    Id={doctor.id}
                                    doctorImg={doctor.img}
                                    doctorFirstName={doctor.firstName}
                                    doctorLastName={doctor.lastName}
                                    doctorEmail={doctor.email}
                                    doctorSpecialty={doctor.specialty}
                                    doctorLanguage={doctor.language}
                                    doctorGender={doctor.gender}
                                    doctorAbout={doctor.about}
                                    doctorEducation={doctor.education}
                                    doctorQualifications={doctor.qualifications}
                                    doctorPhone={doctor.phone}
                                    doctorFacility={doctor.facility}
                                    doctorType={doctor.type}
                                    doctorLocation={doctor.location}
                                />
                            </>
                        );
                    })}
                </section>
            </div>
        </>
    );
};
