import { useEffect, useState } from "react";
import React from "react";
import "./doctor.css";
import { Doctor } from "./Doctor";

export const DoctorsList = () => {
    const [Doctors, setDoctors] = useState([]);

    //---------------------------------------------
    var appUser = localStorage.getItem("app_user");
    var appUserObject = JSON.parse(appUser);
    console.log(appUserObject);
    /* ------------GetAllDoctors--------------- */
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `https://localhost:7183/api/User/GetDoctorList`
            );
            const DoctorsData = await response.json();
            setDoctors(DoctorsData);
            console.log(DoctorsData);
        };
        fetchData();
    }, []);
    console.log(Doctors);
    return (
        <>
            <div className="container ">
                {/* <h1>All Providers</h1> */}
                <section key={`Doctors`} className="Doctors doctorContainer">
                    {Doctors.map((doctor) => {
                        return (
                            <>
                                <Doctor
                                    Id={doctor.id}
                                    doctorImg={doctor.img}
                                    doctorFirstName={doctor.firstName}
                                    doctorLastName={doctor.lastName}
                                    doctorEmail={doctor.email}
                                />
                            </>
                        );
                    })}
                </section>
            </div>
        </>
    );
};
