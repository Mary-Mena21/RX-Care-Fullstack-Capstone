import { useEffect, useState } from "react";
import React from "react";
import { ProfilePatient2 } from "./ProfilePatient2";

export const Profile2 = () => {
    const [User, setUser] = useState([]);
    const [User2, setUser2] = useState([]);
    const [DoctorInfo, setDoctorInfo] = useState([]);
    const [DoctorInfo2, setDoctorInfo2] = useState([]);
    const [DoctorInfo3, setDoctorInfo3] = useState([]);
    //----------------------------------------------
    var appUser = localStorage.getItem("app_user");
    var appUserObject = JSON.parse(appUser);
    console.log(appUserObject.id);
    const Id = appUserObject.id;
    console.log(Id);
    //----------------------------------------------
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `https://localhost:7183/api/User/GetUserInfoByUserId/${Id}`
            );
            const singlePatient = await response.json();
            const singlePatient2 = singlePatient.patient;
            setUser(singlePatient);
            setUser2(singlePatient2);
            console.log(singlePatient);
        };
        //-----------------DoctorInfo--------------------
        const fetchDoctorData = async () => {
            const response = await fetch(
                `https://localhost:7183/api/Patient/GetDoctorInfoByPatientId/${Id}`
            );
            const singleDoctor = await response.json();
            const singleDoctor2 = singleDoctor.doctor;
            const singleDoctor3 = singleDoctor2.user;
            setDoctorInfo(singleDoctor);
            setDoctorInfo2(singleDoctor2);
            setDoctorInfo3(singleDoctor3);
            console.log(singleDoctor);
        };

        fetchData();
        fetchDoctorData();
    }, []);

    return (
        <>
            <div className="">
                <ProfilePatient2
                    patient_Id={User2.id}
                    image={User.img}
                    firstName={User.firstName}
                    lastName={User.lastName}
                    email={User.email}
                    doctorFirstName={DoctorInfo3.firstName}
                    doctorLastName={DoctorInfo3.lastName}
                />
            </div>
        </>
    );
};
