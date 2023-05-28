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
    const [user3, setUser3] = useState([]);
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
            console.log(singlePatient.img);

            const Patient = singlePatient.patient;
            setUser2(Patient);
            console.log(Patient);

            const Prescriptions = singlePatient.prescriptions;
            setUser3(Prescriptions);
            console.log(Prescriptions);
        };
        fetchData();
    }, []);

    return (
        <>
            <div className="">
                {/* -------------------------- */}
                <PatientProfile
                    Image={user.img}
                    FirstName={user.firstName}
                    LastName={user.lastName}
                    Email={user.email}
                    DoB={user2.doB}
                    Address={user2.address}
                    Phone={user2.phone}
                    Height={user2.height}
                    Weight={user2.weight}
                    Note={user2.note}
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
