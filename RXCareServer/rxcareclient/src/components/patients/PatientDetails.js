import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import React from "react";
import { PatientProfile } from "../profile/ProfilePatient";
import { Link } from "react-router-dom";
import { DataTexture } from "three";
import { PatientProfileDetails } from "./PatientProfileDetails";

//import { User } from "./types";
//from Doctor prespective
export const PatientDetails = () => {

    const { patient_Id } = useParams()

    const [userId, setUserId] = useState("");
    const [userInfo, setUserInfo] = useState([]);
    const [user1, setUser1] = useState([]);
    const [user2, setUser2] = useState([]);
    const [user3, setUser3] = useState(0);
    const [user4, setUser4] = useState([]);
    const [user5, setUser5] = useState([]);
    const [doctorInfo, setDoctorInfo] = useState([]);
    const [doctor1, setDoctor1] = useState([]);
    const [doctor2, setDoctor2] = useState([]);
    //---------------------------------------------
    // var appUser = localStorage.getItem("app_user");
    // var appUserObject = JSON.parse(appUser);
    // console.log(appUserObject.id);
    // const Id = appUserObject.id;
    //patient_Id= Id
    //-----------------------------------------------------
    const fetchData = async () => {
        const response = await fetch(
            `https://localhost:7183/api/Patient/${patient_Id}`
        );
        const singlePatient = await response.json();
        setUser1(singlePatient);
       console.log(singlePatient);

        // //-------------------------------------
        const Patient = singlePatient.user;
        setUser2(Patient);
        console.log(Patient);
        const patientId = singlePatient.Id
        // /* --------patientIdNumber----------- */
        const patientIdNumber =
            Patient.lastName.slice(0, 3) +
            Patient.id +
            Patient.firstName.slice(0, 3);
        setUserId(patientIdNumber);
        console.log(patientIdNumber);
        // /* --------DateOfBirth-----Age------ */
        const DateOfBirth = new Date(singlePatient.doB);
        //console.log(DateOfBirth);
        const YoB = DateOfBirth.getUTCFullYear();
        console.log(YoB);
        setUser4(YoB);

        var currentDate = new Date();
        var currentYear = currentDate.getFullYear();
        var age = currentYear - YoB;
        setUser3(age)
        console.log(age);
        //--------------Comments-----------------------
        var comments = Patient.comments
        
    };

    //-----------------DoctorInfo--------------------
    const fetchDoctorData = async () => {
        const response = await fetch(
            `https://localhost:7183/api/Patient/GetDoctorInfoByPatientId2/${patient_Id}`
        );
        const Data = await response.json();
        setDoctorInfo(Data);
        console.log(Data.doctor.user.firstName);
        const Doctor = Data.doctor.user;
        const Clinic = Data.doctor.clinic;
        setDoctor1(Doctor);
        setDoctor2(Clinic);
        console.log(Doctor);
        console.log(Clinic);
    };

    useEffect(() => {
        fetchData();
        fetchDoctorData();
    }, []);

    return (
        <>
            <div className="">
                {/* -------------------------- */}
                <PatientProfileDetails
                    patient_Id={patient_Id}
                    Image={user2.img}
                    FirstName={user2.firstName}
                    LastName={user2.lastName}
                    Email={user2.email}
                    DoB={user1.doB}
                    YoB={user4}
                    Age={user3}
                    Address={user1.address}
                    Phone={user1.phone}

                    Height={user1.height}
                    Weight={user1.weight}
                    Note={user1.note}
                    
                    DoctorFirstName={doctor1.firstName}
                    DoctorLastName={doctor1.lastName}
                    DoctorEmail={doctor1.email}
                    ClinicPhone={doctor2.phone}
                    ClinicAddress={doctor2.address}
                    ClinicFacility={doctor2.facility}
                    ClinicType={doctor2.type}
                    ClinicLocation={doctor2.location}
                    //Prescriptions={user5.prescriptions}
                    patientIdNumber={userId}
                />
                {/* -------------------------- */}
            </div>
        </>
    );
};