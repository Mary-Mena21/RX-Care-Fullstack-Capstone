import React from "react";
import "../home/Home.css"
//    color: #BD996D;
export const Footer = () => {
    return (
        <>
            {/* <footer class="footer bg-dark"> */}
            <footer class="footer bg-dark">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 text-center text-lg-left my-auto  wow zoomIn">
                            <ul class="list-inline mb-2">
                                <li class="list-inline-item">
                                    <a href="#">About</a>
                                </li>
                                <li class="list-inline-item">⋅</li>
                                <li class="list-inline-item">
                                    <a href="#">Contact</a>
                                </li>
                                <li class="list-inline-item">⋅</li>
                                <li class="list-inline-item">
                                    <a href="#">Terms of Use</a>
                                </li>
                                <li class="list-inline-item">⋅</li>
                                <li class="list-inline-item">
                                    <a href="#">Privacy Policy</a>
                                </li>
                            </ul>
                            <p class="text-muted small mb-4 mb-lg-0">
                                © RX-CARE-NSS 2023. All Rights Reserved.
                            </p>
                        </div>
                        <div class="col-lg-6 text-center text-lg-right my-auto  wow zoomIn">
                            <ul class="list-inline mb-0">
                                <li class="list-inline-item mr-3">
                                    <a href="#">
                                        <i class="fa fa-facebook fa-2x fa-fw"></i>
                                    </a>
                                </li>
                                <li class="list-inline-item mr-3">
                                    <a href="#">
                                        <i class="fa fa-twitter fa-2x fa-fw"></i>
                                    </a>
                                </li>
                                <li class="list-inline-item mr-3">
                                    <a href="#">
                                        <i class="fa fa-instagram fa-2x fa-fw"></i>
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="https://github.com/Mary-Mena21/RX-Care-Fullstack-Capstone">
                                        <i class="fa fa-github fa-2x fa-fw"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};
