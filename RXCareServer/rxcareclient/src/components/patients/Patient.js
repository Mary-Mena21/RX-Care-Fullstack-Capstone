import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Patient = ({Id, Img, FirstName, LastName, Email, Note }) => {
    const navigate = useNavigate();

    return (
        <>
            <div className="">
                
{/*             <div class="d-flex justify-content-center h-100">
            <div class="image_outer_container">
                <div class="green_icon"></div>
                <div class="image_inner_container">
                    <img src={Img} />
                </div>
            </div>
        </div>  */}
                
                {/* -------------------------- */}
                <div class="container emp-profile">
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


                                    onClick={() =>
                                        navigate(`/patientsList/${Id}/patientsList/edit/${Id}`)
                                    }
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
//http://localhost:3002/patientsList/7/patientsList/edit/7
//http://localhost:3002/patientsList/7patientsList/edit/7