import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { Link } from "react-router-dom";
import { Navbar2 } from "../navbar/Navbar2";
import { Footer } from "../footer/Footer";

export const Login = () => {
    const [Email, setEmail] = useState("");
    const [Type, setType] = useState("");

    const navigate = useNavigate();

    const validateLogin = async () => {
        try {
            const response = await fetch(
                `https://localhost:7183/api/Login/loginvalidate`,
                {
                    body: JSON.stringify({
                        email: Email,
                        type: Type,
                    }),
                    credentials: "include",
                    method: "post",
                    headers: { "Content-Type": "application/json" },
                }
            );

            const loginResponse = await response.json();
            console.log(loginResponse);
            // if (loginResponse.user) {
            if (response.ok) {
                const userData = { ...loginResponse.user };
                console.log(userData);

                //userData.isAdmin = userData.userType === "Admin" ? true : false;
                userData.isAdmin = true;
                localStorage.setItem("app_user", JSON.stringify(userData));
                navigate("/");
            } else {
                console.log(response);
                window.alert("Invalid login");
                throw new Error(`Error! status: ${response.status}`);
            }
        } catch (error) {
            console.log(error);
        }
    };
    const submissionHandler = (event) => {
        event.preventDefault();
        validateLogin();
    };

    return (
        <>
            {/* <div className="Container"> */}
            {/*                 <div className="ImageContainer">
                    <div className="shadow"></div>
                    <h1 className="LoginHeader">RX-Care</h1>
                    <img className="LoginImage" src={LoginBackGroundPhoto} />
                    <div className="LoginQuote">
                        "Welcome To RX-CARE"
                        <br /> --
                    </div>
                </div> */}
            {/*       <div className="InputContainer">
        <div className="emailInput">
          <h3>Email</h3>
          <input
            type="text"
            className='input'
            value={Email}
            onChange={(event) => setEmail(event.target.value)}
          ></input>
        </div>
        <div className="buttonContainer">
        <div className="button" onClick={(e) => submissionHandler(e)}>
        Login
        </div>
         <section className="link--register"> 
        <Link to="/register">NEW Patient?</Link>
    </section> 
        </div>
        </div> */}

            <div class="register">
            <div class="row g-3">
            <div class="col-md-3 register-left">
            <img
                src="https://image.ibb.co/n7oTvU/logo_white.png"
                alt=""
            />
            <h3>Welcome</h3>
            <p>RX-Care Your Health Gard!</p>
            <br />
        </div>
                
                   <div class="col-md-7 register-right"> 
                <div class="login-form ">
                    <div class="main-div2">
                        <div class="panel">
                            <h2>Login for RX-Care</h2>
                            <p>Please enter your email</p>
                        </div>
                        <form id="Login">
                            <div class="form-group">
                                <input
                                    type="email"
                                    class="form-control"
                                    id="inputEmail"
                                    placeholder="Email Address"
                                    value={Email}
                                    onChange={(event) =>
                                        setEmail(event.target.value)
                                    }
                                />
                            </div>

                            {/*                                 <div class="form-group">
                                    <input
                                        type="password"
                                        class="form-control"
                                        id="inputPassword"
                                        placeholder="Password"
                                    />
                                </div> */}
                            <div class="forgot">
                                <Link to="/register">
                                    Register NEW Patient?
                                </Link>
                            </div>
                            <button
                                type="submit"
                                class="btn btn-primary"
                                onClick={(e) => submissionHandler(e)}
                            >
                                Login
                            </button>
                        </form>
                    </div>
                </div>
                {/* </div> */}
            </div>
            </div>
            </div>
            <Footer/>
        </>
    );
};
