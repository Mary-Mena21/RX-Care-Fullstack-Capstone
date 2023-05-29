import { Link } from "react-router-dom";
import React from "react";
import "./doctor.css";

export const Doctor = ({
    Id,
    doctorImg,
    doctorFirstName,
    doctorLastName,
    doctorEmail,
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
                    <div class="col-md-6 img">
                        <img
                            //src={require(`../images/${doctorImg}`)}
                            src={doctorImg}
                            className="doctorImg"
                        />
                    </div>
                    <div className="col-md-6 details">
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
                        </div>
                        <p>
                            {doctorEmail}
                            <br />
                            www.bootsnipp.com <br />
                            June 18, 1990
                        </p>
                    </div>
                </div>
            </div>
            {/* ------------------------------------------------- */}
        </div>
    );
};
//<img src={doctorImg} className="doctorImg" />
