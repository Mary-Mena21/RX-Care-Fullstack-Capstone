import React from "react";

export const Home = () => {

    var appUser = localStorage.getItem("app_user");
    var appUserObject = JSON.parse(appUser);
console.log(appUserObject.id);

    return <>
        <div className="container">
        <h1>WElcome home</h1>
        </div>
    </>
}