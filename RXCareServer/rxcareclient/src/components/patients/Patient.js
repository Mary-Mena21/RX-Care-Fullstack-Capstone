import React from "react";
import { Link } from "react-router-dom";

export const Patient = ({ Id, Img, FirstName, LastName, Email, Note }) => {
    return (
        <>
            <div className="">
                {/* -------------------------- */}
                <div class=" emp-profile">
                    <form method="post">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="profile-img">
                                    <img
                                        src={Img}
                                        alt=""
                                        style={{
                                            height: "200px",
                                            width: "200px",
                                        }}
                                    />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="profile-head">
                                    <h5>
                                        {FirstName} {LastName}
                                    </h5>
                                    <h6>{Email}</h6>
                                    <p class="proile-rating">
                                        NOTE : <span>{Note}</span>
                                    </p>
                                    <ul class="nav nav-tabs">
                                        <li class="nav-item">
                                            <Link to={`/patientsList/${Id}`}>
                                                <a
                                                    class="nav-link "
                                                    href="#home"
                                                    role="tab"
                                                    aria-controls="home"
                                                >
                                                    Profile
                                                </a>
                                            </Link>
                                        </li>
                                        <li class="nav-item">
                                            <a
                                                class="nav-link"
                                                href="#profile"
                                                role="tab"
                                                aria-controls="profile"
                                            >
                                                Comment
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a
                                                class="nav-link"
                                                href="#profile"
                                                role="tab"
                                                aria-controls="profile"
                                            >
                                                Prescription
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-2">
                                <input
                                    type="submit"
                                    class="profile-edit-btn"
                                    name="btnAddMore"
                                    value="Edit Profile"
                                />
                            </div>
                        </div>
                    </form>
                </div>
                {/* -------------------------- */}
            </div>
        </>
    );
};
