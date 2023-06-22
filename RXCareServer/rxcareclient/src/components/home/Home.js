import React from "react";
import { Doctor } from "../doctors/Doctor";
import { DoctorsList } from "../doctors/DoctorsList";
import { Button } from "bootstrap";
import { Navigate, useNavigate } from "react-router-dom";
import "../home/Home.css";

export const Home = () => {
    var appUser = localStorage.getItem("app_user");
    var appUserObject = JSON.parse(appUser);
    console.log(appUserObject.id);
    const navigate = useNavigate();

    return (
        <>
            {/* ---------------------------------------------------- */}
            <section class="testimonials" /* id="gobottom" */>
                <div class="container">
                    <div class="row">
                        <div
                            class="col-md-4 mb-3 wow bounceInUp"
                            data-wow-duration="1.4s"
                        >
                            <div class="big-img">
                                <img
                                    src="https://i.ibb.co/5hqJPn3/home5.jpg"
                                    class="img-fluid"
                                />
                            </div>
                        </div>
                        <div class="col-md-8">
                            <div class="inner-section wow fadeInUp">
                                <h3>
                                    Follow Up Your
                                    <span class="bg-main"> Prescription</span>
                                </h3>
                                <br />
                                <p class="text-justify textStyle">
                                    <b>RX-CARE</b> is the game-changing app that
                                    is transforming the way doctors connect with
                                    their patients and monitor their
                                    prescriptions. With RX-Care, the days of
                                    lengthy phone calls, missed messages, and
                                    delayed prescription updates are a thing of
                                    the past. This innovative platform creates a
                                    seamless and efficient channel for doctors
                                    and patients to stay in touch, ensuring
                                    personalized care and timely updates.
                                </p>

                                <div class="linear-grid">
                                    <div class="row">
                                        <div
                                            class="col-sm-6 col-md-3 mb-2 wow bounceInUp"
                                            data-wow-duration="1.4s"
                                        >
                                            <img
                                                src="https://i.ibb.co/44BMy2M/home4.jpg"
                                                class="img-thumbnail"
                                            />
                                        </div>
                                        <div
                                            class=" col-sm-6 col-md-3 mb-2 wow bounceInUp"
                                            data-wow-duration="1.4s"
                                        >
                                            <img
                                                src="https://i.ibb.co/K9Vtrjw/home2.jpg"
                                                class="img-thumbnail"
                                            />
                                        </div>
                                        <div
                                            class="col-sm-6 col-md-3 mb-2 wow bounceInUp"
                                            data-wow-duration="1.4s"
                                        >
                                            <img
                                                src="https://i.ibb.co/XLxBrcD/home1.jpg"
                                                class="img-thumbnail"
                                            />
                                        </div>
                                        <div
                                            class="col-sm-6 col-md-3 mb-2 wow bounceInUp"
                                            data-wow-duration="1.4s"
                                        >
                                            <img
                                                src="https://t4.ftcdn.net/jpg/00/19/10/91/240_F_19109181_mJtAS4FjqPi9BHO6t8yxbxX2K0IP6dlj.jpg"
                                                class="img-thumbnail"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
