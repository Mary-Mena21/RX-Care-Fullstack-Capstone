import { useEffect, useState } from "react";
//import { useParams } from "react-router-dom"
import React from "react";
import { PatientProfile } from "./ProfilePatient";
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
    const [user7, setUser7] = useState([]);
    const [doctorInfo, setDoctorInfo] = useState([]);
    const [doctor1, setDoctor1] = useState([]);
    const [doctor2, setDoctor2] = useState([]);
    //---------------------------------------------
    var appUser = localStorage.getItem("app_user");
    var appUserObject = JSON.parse(appUser);
    console.log(appUserObject.id);
    const Id = appUserObject.id;
    //patient_Id= Id
    //-----------------------------------------------------
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `https://localhost:7183/api/User/GetById/${Id}`
            );
            const singlePatient = await response.json();
            setUser1(singlePatient);
            console.log(singlePatient);

            /* --------patientIdNumber----------- */
            const patientIdNumber =
                singlePatient.lastName.slice(0, 3) +
                singlePatient.id +
                singlePatient.firstName.slice(0, 3);
            setUserId(patientIdNumber);
            console.log(patientIdNumber);
            //-------------------------------------
            const Patient = singlePatient.patient;
            setUser2(Patient);
            console.log(Patient);
            /* --------DateOfBirth-----Age------ */
            const DateOfBirth = new Date(singlePatient.patient.doB);
            const YoB = DateOfBirth.getUTCFullYear();
            console.log(YoB);
            setUser4(YoB);

            var currentDate = new Date();
            var currentYear = currentDate.getFullYear();
            var age = currentYear - YoB;
            setUser3(age);
            console.log(age);
            //---------------Prescriptions----------------------
            const Prescriptions = singlePatient.patient.prescriptions;
            setUser5(Prescriptions);
            console.log(Prescriptions);
            //---------------Comments----------------------
            const Comments = singlePatient.patient.comment;
            setUser6(Comments);
            console.log(Comments);
            //---------------Medicine----------------------
            const Medicine = singlePatient.patient.prescriptions.medicine;
            setUser7(Medicine);
            console.log(Medicine);
        };

        //-----------------DoctorInfo--------------------
        const fetchDoctorData = async () => {
            const response = await fetch(
                `https://localhost:7183/api/Patient/GetDoctorInfoByPatientId/${Id}`
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
                    //patient_Id={user2.id}
                    patientUser={user2.id}
                    image={user1.img}
                    firstName={user1.firstName}
                    lastName={user1.lastName}
                    email={user1.email}
                    doB={user2.doB}
                    yoB={user4}
                    age={user3}
                    address={user2.address}
                    phone={user2.phone}
                    height={user2.height}
                    weight={user2.weight}
                    note={user2.note}
                    doctorFirstName={doctor1.firstName}
                    doctorLastName={doctor1.lastName}
                    doctorEmail={doctor1.email}
                    clinicPhone={doctor2.phone}
                    clinicAddress={doctor2.address}
                    clinicFacility={doctor2.facility}
                    clinicType={doctor2.type}
                    clinicLocation={doctor2.location}
                    prescriptions={user5}
                    comment={user6}
                    patientIdNumber={userId}
                    medicine={user7}
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
