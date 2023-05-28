import { useEffect, useState } from "react";
//import { useParams } from "react-router-dom"
import React from "react";
import "./ProfileDoctor.css";
//import images from "../images"

export const ProfileDoctor = () => {
    //const { userId } = useParams()
    const [User, setUser] = useState([]);

    //---------------------------------------------
    var appUser = localStorage.getItem("app_user");
    var appUserObject = JSON.parse(appUser);
    let Id = appUserObject.id;
    console.log(appUserObject);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `https://localhost:7183/api/User/GetProfileById/${Id}`
            );
            const singleUser = await response.json();
            setUser(singleUser);
            console.log(singleUser);
        };
        fetchData();
    }, []);
    console.log(User);
    //const DrProfileImg = require(`../images/${User.img}`)
    return (
        <>
            <div class="container">
                <div class="row">
                    <div class="col-md-6 img">
                        <img
                            //src={require(`../images/${User.img}`)}
                            //src={require(`../images/doctor2.jpg`)}
                            //src={DrProfileImg}
                            //style={{ width: "300px", height: "300px" }}
                            className="doctorImg"
                            alt=""
                        />
                    </div>
                    <div className="col-md-6 details">
                        <div>
                            <h5>
                                Dr. {User.firstName} {User.lastName}
                            </h5>
                            <small>
                                <cite title="Source Title">
                                    Chicago, United States of America{" "}
                                    <i class="icon-map-marker"></i>
                                </cite>
                            </small>
                        </div>
                        <p>
                            {User.email}
                            <br />
                            www.bootsnipp.com <br />
                            June 18, 1990
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};
//src={require(`../images/doctor2.jpg`)}
//src={images/User.img} alt=""
