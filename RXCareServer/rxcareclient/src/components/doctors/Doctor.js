// import { Link } from "react-router-dom";
import React from "react";
import "./doctor.css";
import { Footer } from "../footer/Footer";

export const Doctor = ({
    Id,
    doctorImg,
    doctorFirstName,
    doctorLastName,
    doctorEmail,
    doctorSpecialty,
    doctorAbout,
    doctorPhone,
    doctorLocation,
    doctorLanguage,
    doctorGender,
    doctorEducation,
    doctorQualifications,
    doctorFacility,
    doctorType,
}) => {
    return (
        <div className="container doctorCard">
            {/*             <section className="doctor" key={`doctor--${Id}`}>
                <Link to={`/doctors/${Id}`}>
                    <img src={require(`../images/${doctorImg}`)} className="doctorImg" />
                </Link>
                <h5>
                    {doctorFirstName} {doctorLastName}
                </h5>
            </section> */}
            {/* ------------------------------------------------- */}
            <div class="container main">
                <div class="row">
                    <div class="col-md-4 img">
                        <img
                            //src={require(`../images/${doctorImg}`)}
                            src={doctorImg}
                            className="doctorImg"
                        />
                    </div>
                    <div className="col-md-8 details">
                        <div>
                            <h5>
                                Dr. {doctorFirstName} {doctorLastName}
                            </h5>
                            <small>
                                <cite title="Source Title">
                                    Tennessee, United States of America{" "}
                                    <i class="icon-map-marker"></i>
                                </cite>
                            </small>


                            <h6>Specialties: {doctorSpecialty}</h6>
                            {doctorEmail}
                            <small>
                                <cite title="Source Title">
                                    "{doctorAbout}"{" "}
                                </cite>
                            </small>
                            {/* <p>Education: { doctorEducation}</p> */}

                            <p>
                            <br />
                            www.RxCare.com <br />
                                June 18, 2023
                                <br />
                                <h6><a href={`tel : ${doctorPhone}`}>
                                    {doctorPhone}
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
            </div>
            {/* ------------------------------------------------- */}
        </div>
    );
};
//<img src={doctorImg} className="doctorImg" />
