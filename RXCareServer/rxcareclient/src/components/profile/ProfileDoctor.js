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
                //`https://localhost:7183/api/User/GetProfileById/${Id}`
                `https://localhost:7183/api/Doctor/GetDoctorFullInfo?Id=${Id}`
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
                {/* -------------------------- */}
                <h1 class=" col-md-4 ml-auto search-text ">Provider Profile</h1>
                 <div class="emp-profile">
                 <form method="post">
                <div class="row">
                
                    <div class="col-md-4 img">
                        <img
                            //src="https://i.ibb.co/xJGLf4Y/patient16.jpg"
                                    //src={require(`../images/doctor1.jpg`)}
                                    //src={require(`../images/${User.img}`)}
                            src={User.img}
                            //style={{ width: "300px", height: "300px" }}
                            className="doctorImg"
                            alt="image"
                        />
                    </div>
{/*                     <div className="col-md-8 details">
                        <div>
                            <h5>
                                Dr. {User.firstName} {User.lastName}
                            </h5>
                            <small>
                                <cite title="Source Title">
                                Tennessee, United States of America{" "}
                                    <i class="icon-map-marker"></i>
                                </cite>
                            </small>
                        </div>
                        <p>
                            {User.email}
                                    <br />
                            www.rxcare.com <br />

                        </p>
                    </div> */}
                    <div className="col-md-8 details padding-text">
                    <div>
                        <h5>
                            Dr. {User.firstName} {User.lastName}
                        </h5>
                        <small><cite>{User.email}</cite></small>
                        <br />

                        
                        <h6>Specialties: {User.specialty}</h6>
                        <small>
                            <cite title="Source Title">
                                "{User.about}"{" "}
                            </cite>
                        </small>
                        {/* <p>Education: { doctorEducation}</p> */}
                        <p>
                            <br/>   
                        <small>
                        <cite title="Source Title">
                            Tennessee, United States of America{" "}
                            <i class="icon-map-marker"></i>
                        </cite>
                    </small>
                        
                        <br />
                        <small><h6>www.RxCare.com </h6></small>
                           {/*  June 18, 2023
                            <br /> */}
                            <h6><a href={`tel : ${User.phone}`}>
                            {User.phone}
                            </a>{" "}</h6>
                            <p>
{/*                                 <h6 className="proile-rating">
                                LOCATION : {doctorLocation}
                            </h6> */}
                            </p>
                                    </p>
                                    
                                </div>
                                
                            </div>

                        </div>
                        <div class="col-md-2">
                        <input
                            type="submit"
                            class="profile-edit-btn"
                            name="btnAddMore"
                            value="📝Edit Profile"
                            onClick={() =>
                                navigate(`/profileDoctor/edit/${User.id}
                                `)
                            }
                        />
                    </div>
                </form> 
                </div>
            </div>
        </>
    );
};
//src={require(`../images/doctor2.jpg`)}
//src={images/User.img} alt=""


/* 
https://i.ibb.co/Y0hXCpH/care-Group.jpg

https://i.ibb.co/hYzd75J/doctor1.jpg
https://i.ibb.co/dpdTRTT/doctor2.jpg
https://i.ibb.co/NpJ0VRR/doctor3.jpg
https://i.ibb.co/7jPrgth/doctor4.jpg
https://i.ibb.co/qDVZwp8/doctor5.jpg
https://i.ibb.co/5kR4tpk/Login-Back-Ground-Photo.jpg
https://i.ibb.co/TgVQK0r/patient1.jpg
https://i.ibb.co/cvC2t5H/patient2.jpg
https://i.ibb.co/VVMCcBw/patient3.jpg
https://i.ibb.co/nDRNfsD/patient4.jpg
https://i.ibb.co/L1Z8743/patient5.jpg
https://i.ibb.co/qr0bbj6/patient6.jpg
https://i.ibb.co/xGnCRdy/patient7.jpg
https://i.ibb.co/ZWL1brv/patient8.jpg
https://i.ibb.co/yX45HX0/patient9.jpg
https://i.ibb.co/L52phL0/patient10.jpg
https://i.ibb.co/1TdGwTg/patient11.jpg
https://i.ibb.co/8jHNjp1/patient12.jpg
https://i.ibb.co/mh5CcP6/patient13.jpg
https://i.ibb.co/f85bqcb/patient14.jpg
https://i.ibb.co/b54NTjJ/patient15.jpg
https://i.ibb.co/xJGLf4Y/patient16.jpg
https://i.ibb.co/WFPLDJS/patient17.jpg
https://i.ibb.co/CWMZY5P/patient18.jpg
https://i.ibb.co/QFm740J/patient19.jpg
*/
/* 
https://ibb.co/XYtDQSc
https://ibb.co/qJQgyG3
https://ibb.co/2MD9T99
https://ibb.co/tcv0mRR
https://ibb.co/vVpLs49
https://ibb.co/wdjv14q
https://ibb.co/hcm9hQc
https://ibb.co/fxh38NQ
https://ibb.co/9WrN5R7
https://ibb.co/z48KKxd
https://ibb.co/pZH095g
https://ibb.co/hD71TNr
https://ibb.co/QfDnyf9
https://ibb.co/BNSsKXf
https://ibb.co/sq69Mqf
https://ibb.co/30n40qg
https://ibb.co/zPVh4tG
https://ibb.co/z8Y1Qk1
https://ibb.co/qYHmKL5
https://ibb.co/gzw9Pnd
https://ibb.co/MpGm80q
https://ibb.co/zN7YBh6
https://ibb.co/3yh5nKT
*/