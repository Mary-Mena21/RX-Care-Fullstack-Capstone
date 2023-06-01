import { useEffect, useState } from "react";
//import { useParams } from "react-router-dom"
import React from "react";
import { PatientProfile } from "../profile/ProfilePatient";
import { Link } from "react-router-dom";
import { DataTexture } from "three";

//from user prespective

export const Profile = () => {
    // const { patient_Id } = useParams()
    const [userId, setUserId] = useState("");
    const [userInfo, setUserInfo] = useState([]);
    const [user1, setUser1] = useState([]);
    const [user2, setUser2] = useState([]);
    const [user3, setUser3] = useState(0);
    const [user4, setUser4] = useState([]);
    const [user5, setUser5] = useState([]);
    const [user6, setUser6] = useState([]);
    const [doctorInfo, setDoctorInfo] = useState([]);
    const [doctor1, setDoctor1] = useState([]);
    const [doctor2, setDoctor2] = useState([]);
    //---------------------------------------------
    var appUser = localStorage.getItem("app_user");
    var appUserObject = JSON.parse(appUser);
    console.log(appUserObject.id);
    const UserId = appUserObject.id;
    //patient_Id= Id
    //-----------------------------------------------------
    
    const fetchData = async () => {
        const response = await fetch(
            `https://localhost:7183/api/Patient/byUseId/${UserId}`
        );
        const singlePatient = await response.json();
        console.log(singlePatient.id);
        setUser6(singlePatient.id)
        setUser1(singlePatient);
        const X = singlePatient
        console.log(X.id);
        console.log(singlePatient);
        const Patient = singlePatient.user;
        setUser2(Patient);
        console.log(Patient.id);
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
        //-------------------------------------
        const Prescriptions = singlePatient.patient.prescriptions;
        setUser6(Prescriptions);
        console.log(Prescriptions);
    };

    //-----------------DoctorInfo--------------------
    const fetchDoctorData = async () => {
        const response = await fetch(
            `https://localhost:7183/api/Patient/GetDoctorInfoByPatientId/${UserId}`
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
    //https://localhost:7183/api/Patient/GetDoctorInfoByPatientId/10

    useEffect(() => {
        fetchData();
        fetchDoctorData();
    }, []);

    //-----------------UserInfo----------------------
    // useEffect(() => {
    //     const fetchData2 = async () => {
    //         const response = await fetch(
    //             `https://localhost:7183/api/User/GetProfileById/${Id}`
    //         );
    //         const singlePatientInfo = await response.json();
    //         setUserInfo(singlePatientInfo);
    //     };
    //     fetchData2();
    // }, []);
    return (
        <>
            <div className="">
                {/* -------------------------- */}
                <PatientProfile
                patient_Id={user1.id}
                patientUser={user6}
                    image={user2.img}
                    firstName={user2.firstName}
                    lastName={user2.lastName}
                    email={user2.email}
                    doB={user1.doB}
                    yoB={user4}
                    age={user3}
                    address={user1.address}
                    phone={user1.phone}

                    height={user1.height}
                    weight={user1.weight}
                    note={user1.note}
                    
                    doctorFirstName={doctor1.firstName}
                    doctorLastName={doctor1.lastName}
                    doctorEmail={doctor1.email}
                    clinicPhone={doctor2.phone}
                    clinicAddress={doctor2.address}
                    clinicFacility={doctor2.facility}
                    clinicType={doctor2.type}
                    clinicLocation={doctor2.location}
                    prescriptions={user5.prescriptions}
                    patientIdNumber={userId}
                />
                {/* -------------------------- */}
            </div>
        </>
    );
};

/* 
{
    "id": 10,
    "type": "Patient",
    "img": "patient5.jpg",
    "firstName": "Amanda",
    "lastName": "Thomas",
    "email": "amandathomas@example.com",
    "patient": {
        "id": 5,
        "userId": 10,
        "doctorId": 3,
        "doB": "1994-05-05T00:00:00",
        "address": "654 5th St, Chattanooga, TN",
        "phone": "423-555-5678",
        "height": 70,
        "weight": 160,
        "note": "Previous heart surgery",
        "prescriptions": [
            {
                "id": 5,
                "medicineId": 5,
                "dosage": "Apply a thin layer twice daily",
                "quantity": 1,
                "patientId": 5,
                "medicine": {
                    "id": 5,
                    "medicineName": "Medicine 5",
                    "imgUrl": "medicine5.jpg",
                    "form": "Ointment",
                    "sideEffects": "Skin irritation, Allergic reaction",
                    "drugInfo": "Apply a thin layer of this ointment..."
                }
            }
        ],
        "comment": null
    }
}
*/
