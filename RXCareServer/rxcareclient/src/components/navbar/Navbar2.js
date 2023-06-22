import React, { useEffect } from "react";
import "../navbar/Navbar2.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { UserImg } from "../user/UserImg";

export const Navbar2 = ({ children }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // const [Person, setPerson] = useState([]);
    // const [searchTerms, setSearchTerms] = useState("");

    var appUser = localStorage.getItem("app_user");
    var appUserObject = JSON.parse(appUser);
    let Id = appUserObject.id;
    console.log(appUserObject);


    /* ------------GetAllPatients--------------- */
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await fetch(
    //             `https://localhost:7183/api/Patient/All/${appUserObject.id}`
    //         );
    //         const Data = await response.json();
    //         setPerson(Data);
    //         //searchByTitle------------------------------------------
    //         const searchByName = Data.filter((person) =>
    //         person.user.firstName.toLowerCase().startsWith(searchTerms.toLowerCase())
    //         );
    //         setPerson(searchByName);
    //     };
    //     fetchData();
    // }, [searchTerms]);

//my-lg-4 col-md-2
    if (appUserObject.type == "Doctor") {
        return (
            <>
                {/* ----------------DoctorNav------------------ */}
                <div className="navbarNew">
                    <nav class="navbar fixed-top navbar-expand-lg navbar-dark">
                        <div class="container">
                            <div></div>
                            <a class="navbar-brand" href="index.html">
                                <h3 class="my-heading ">
                                    RX-<span class="bg-main">CARE</span>
                                </h3>
                            </a>

                            <UserImg />
                            <button
                                class="navbar-toggler navbar-toggler-right"
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarResponsive"
                                aria-controls="navbarResponsive"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                                variant="primary"
                                onClick={handleShow}
                            >
                                <span class="fa fa-bars mfa-white"></span>
                            </button>

                            <div id="main">
                                <a href="javascript:void(0)" class="openNav">
                                    <span
                                        class="fa fa-bars"
                                        onClick={handleShow}
                                    ></span>
                                </a>
                            </div>
                            <div></div>
                            <div class="sideNavBar">
                                {" "}
                                {/*  */}
                                <Offcanvas
                                    /* class="closebtn" */
                                    show={show}
                                    onHide={handleClose}
                                >
                                    <Offcanvas.Header closeButton>
                                        <Offcanvas.Title>
                                            <h3 class="my-heading ">
                                                <span class="bg-main">
                                                    Rx-CARE
                                                </span>
                                            </h3>
                                        </Offcanvas.Title>
                                    </Offcanvas.Header>
                                    <Offcanvas.Body>
                                        <div id="mySidenav" class="">
                                            {" "}
                                            {/*  */}
                                            {/* <div id="" class="sidenav"> 
                                            {/*  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">×</a> */}
                                            <UserImg />
                                            <ul class="mob-ul">
                                                <li class="nav-itemN">
                                                    <a
                                                        class="nav-link"
                                                        href="/"
                                                    >
                                                        Home
                                                    </a>
                                                </li>
                                                {/* <li class="nav-itemN">
                                                    <a
                                                        class="nav-link"
                                                        href="/aboutApp"
                                                    >
                                                        About
                                                    </a>
                                                </li> */}

                                                <li class="nav-itemN">
                                                    <a
                                                        class="nav-link"
                                                        href="/profileDoctor"
                                                    >
                                                        Doctor Profile
                                                    </a>
                                                </li>
                                                <li class="nav-itemN">
                                                    <a
                                                        class="nav-link"
                                                        href="/patientsList"
                                                    >
                                                        Patient List
                                                    </a>
                                                </li>

                                                {/*  <li class="nav-itemN">
                                                    <a
                                                        class="nav-link"
                                                        href="/profile2"
                                                    >
                                                        Patient Profile
                                                    </a>
                                                </li> */}
                                                <li class="nav-itemN">
                                                    <a
                                                        class="nav-link"
                                                        href="/login3d"
                                                    >
                                                        Logout
                                                    </a>
                                                </li>
                                                {/*      <li class="nav-itemN">
                                                    <a
                                                        class="nav-link"
                                                        href="#"
                                                    >
                                                        Login
                                                    </a>
                                                </li> */
                                                /*      <li class="nav-itemN">
                                                    <a
                                                        class="nav-link"
                                                        href="#"
                                                    >
                                                        Register
                                                    </a>
                                                </li> */}
                                            </ul>
                                        </div>
                                    </Offcanvas.Body>
                                </Offcanvas>
                            </div>

                            <div
                                class="collapse navbar-collapse"
                                id="navbarResponsive"
                            >
{/*                                 <form class="form-inline my-2 my-lg-0 col-md-4">
                                    <input
                                        class="myform-control mr-sm-2"
                                        type="search"
                                        placeholder="find doctors, patients and more..."
                                        aria-label="Search"
                                        onChange={(e) => setSearchTerms(e.target.value)}
                                    />
                                    <button class="btn btn-light">
                                        <i class="fa fa-search"></i>
                                    </button>
                                </form> */}
                                <ul class="navbar-nav ml-auto">
                                    {/*                    <li class="nav-link">
                        <a class="btn btn-primary btn-block btn-login" href="#">Login</a>
                    </li>
                    <li class="nav-link">
                        <a class="btn btn-primary btn-block btn-register" href="#">Register</a>
                    </li> */}

                                    <li class="nav-link">
                                        <a
                                            class="btn btn-primary btn-block btn-register"
                                            href="/"
                                        >
                                            Home
                                        </a>
                                    </li>

                                    <li class="nav-link">
                                        <a
                                            class="btn btn-primary btn-block btn-register"
                                            href="/profileDoctor"
                                        >
                                            Doctor Profile
                                        </a>
                                    </li>

                                    <li class="nav-link">
                                        <a
                                            class="btn btn-primary btn-block btn-register"
                                            href="/patientsList"
                                        >
                                            Patient List
                                        </a>
                                    </li>
                                    <li class="nav-link">
                                        <a
                                            class="btn btn-primary btn-block btn-register"
                                            href="/login3d"
                                        >
                                            Logout
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <main>{children}</main>
                    </nav>
                </div>
            </>
        );
    } else {
        return (
            <>
                {/* ----------------PatientNav------------------ */}
                <div className="navbarNew">
                    <nav class="navbar fixed-top navbar-expand-lg navbar-dark">
                        <div class="container">
                            <div></div>
                            <a class="navbar-brand" href="/aboutApp">
                                <h3 class="my-heading ">
                                    RX-<span class="bg-main">CARE</span>
                                </h3>
                            </a>

                            <UserImg />

                            <button
                                class="navbar-toggler navbar-toggler-right"
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarResponsive"
                                aria-controls="navbarResponsive"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                                variant="primary"
                                onClick={handleShow}
                            >
                                <span class="fa fa-bars mfa-white"></span>
                            </button>

                            <div id="main">
                                <a href="javascript:void(0)" class="openNav">
                                    <span
                                        class="fa fa-bars"
                                        onClick={handleShow}
                                    ></span>
                                </a>
                            </div>
                            <div></div>
                            <div class="sideNavBar">
                                {/*  */}
                                <Offcanvas
                                    /* class="closebtn" */
                                    show={show}
                                    onHide={handleClose}
                                >
                                    <Offcanvas.Header closeButton>
                                        <Offcanvas.Title>
                                            <h3 class="my-heading ">
                                                <span class="bg-main">
                                                    Rx-CARE
                                                </span>
                                            </h3>
                                        </Offcanvas.Title>
                                    </Offcanvas.Header>
                                    <Offcanvas.Body>
                                        <div id="mySidenav" class="">
                                            {" "}
                                            {/*  */}
                                            {/* <div id="" class="sidenav"> */}
                                            {/*  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">×</a> */}
                                            <UserImg />
                                            <ul class="mob-ul">
                                                <li class="nav-itemN">
                                                    <a
                                                        class="nav-link"
                                                        href="/"
                                                    >
                                                        Home
                                                    </a>
                                                </li>
{/*                                                 <li class="nav-itemN">
                                                    <a
                                                        class="nav-link"
                                                        href="/aboutApp"
                                                    >
                                                        About
                                                    </a>
                                                </li> */}

                                                {/*   <li class="nav-itemN">
                                                    <a
                                                        class="nav-link"
                                                        href="/profileDoctor"
                                                    >
                                                        Doctor Profile
                                                    </a>
                                                </li> */}
                                                <li class="nav-itemN">
                                                    <a
                                                        class="nav-link"
                                                        href="/doctorList"
                                                    >
                                                        Doctors List
                                                    </a>
                                                </li>

                                                <li class="nav-itemN">
                                                    <a
                                                        class="nav-link"
                                                         href="/profile2" 
                                                    >
                                                        Patient Profile
                                                    </a>
                                                </li>

                                                <li class="nav-itemN">
                                                    <a
                                                        class="nav-link"
                                                        href="/login3d"
                                                    >
                                                        Logout
                                                    </a>
                                                </li>
                                                {/*      <li class="nav-itemN">
                                                    <a
                                                        class="nav-link"
                                                        href="#"
                                                    >
                                                        Login
                                                    </a>
                                                </li> */}
                                                {/*    <li class="nav-itemN">
                                                    <a
                                                        class="nav-link"
                                                        href="#"
                                                    >
                                                        Register
                                                    </a>
                                                </li> */}
                                            </ul>
                                        </div>
                                        .
                                    </Offcanvas.Body>
                                </Offcanvas>
                            </div>

                            <div
                                class="collapse navbar-collapse"
                                id="navbarResponsive"
                            >
{/*                                 <form class="form-inline my-2 my-lg-0 col-md-4">
                                    <input
                                        class="myform-control mr-sm-2"
                                        type="search"
                                        placeholder="find doctors, patients and more..."
                                        aria-label="Search"
                                    />
                                    <button class="btn btn-light">
                                        <i class="fa fa-search"></i>
                                    </button>
                                </form> */}
                                <ul class="navbar-nav ml-auto">
                                    {/*                    <li class="nav-link">
                     <a class="btn btn-primary btn-block btn-login" href="#">Login</a>
                 </li>
                 <li class="nav-link">
                     <a class="btn btn-primary btn-block btn-register" href="#">Register</a>
                 </li> */}


                                    <li class="nav-link">
                                        <a
                                            class="btn btn-primary btn-block btn-register"
                                            href="/"
                                        >
                                            Home
                                        </a>
                                    </li>

                                    <li class="nav-link">
                                        <a
                                            class="btn btn-primary btn-block btn-register"
                                            href="/profile2"
                                        >
                                            Patient Profile
                                        </a>
                                    </li>

                                    <li class="nav-link">
                                        <a
                                            class="btn btn-primary btn-block btn-register"
                                            href="/doctorList"
                                        >
                                            Doctor List
                                        </a>
                                    </li>
                                    <li class="nav-link">
                                    <a
                                        class="btn btn-primary btn-block btn-register"
                                        href="/login3d"
                                    >
                                        Logout
                                    </a>
                                </li>
                                </ul>
                            </div>
                        </div>

                        <main>{children}</main>
                    </nav>
                </div>
            </>
        );
    }
};
