import React from "react";
import "./doctor.css";

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
            {/* ------------------------------------------------- */}
            <div class=" main">
                <div class="row">
                    <div class="col-md-4 img">
                        <img
                            //src={require(`../images/${doctorImg}`)}
                            src={doctorImg}
                            className="doctorImg"
                            alt=""
                        />
                        {/* <img src={require('./logo.jpeg').default} /> */}
                    </div>
                    <div className="col-md-8 details padding-text">
                        <div>
                            <h5>
                                Dr. {doctorFirstName} {doctorLastName}
                            </h5>
                            <small>
                                <cite>{doctorEmail}</cite>
                            </small>
                            <br />

                            <h6>Specialties: {doctorSpecialty}</h6>
                            <small>
                                <cite title="Source Title">
                                    "{doctorAbout}"{" "}
                                </cite>
                            </small>
                            <p>
                                <br />
                                <small>
                                    <cite title="Source Title">
                                        Tennessee, United States of America{" "}
                                        <i class="icon-map-marker"></i>
                                    </cite>
                                </small>

                                <br />
                                <small>
                                    <h6>www.RxCare.com </h6>
                                </small>
                                <h6>
                                    <a href={`tel : ${doctorPhone}`}>
                                        {doctorPhone}
                                    </a>{" "}
                                </h6>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* ------------------------------------------------- */}
        </div>
    );
};
