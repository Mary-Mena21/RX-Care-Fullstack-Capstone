import React from "react";
import { Doctor } from "../doctors/Doctor";
import { DoctorsList } from "../doctors/DoctorsList";

export const Home = () => {
    var appUser = localStorage.getItem("app_user");
    var appUserObject = JSON.parse(appUser);
    console.log(appUserObject.id);

    return (
        <>
            <div className="container">
                <h1>WElcome home</h1>
                <DoctorsList />
            </div>
        </>
    );
};
