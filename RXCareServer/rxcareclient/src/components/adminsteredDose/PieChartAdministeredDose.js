// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "../profile/ProfilePatient.css";
// //import "./PrescriptionList.css";
// import Accordion from "react-bootstrap/Accordion";
// import { Button } from "bootstrap";
// import Form from "react-bootstrap/Form";
// //import { PieChartAdministeredDose } from "../adminsteredDose/PieChartAdministeredDose";
// import { PieChart } from "react-minimal-pie-chart";

// export const PieChartAdministeredDose = ({ patient_Id }) => {
//     const [Administered, setAdministered] = useState([]);
//     //--------------------------------
//     var appUser = localStorage.getItem("app_user");
//     var appUserObject = JSON.parse(appUser);
//     console.log(appUserObject.type);
//     const Type = appUserObject.type;
//     console.log(Type);

//     //     /* -------------Display AdministeredDoseList----------------- */
//     useEffect(() => {
//         const fetchData = async () => {
//             const response = await fetch(
//                 `https://localhost:7183/api/prescription/GetPrescriptionDosesByPatientId/${patient_Id}`
//             );
//             const AdministeredDoseArray = await response.json();
//             setAdministered(AdministeredDoseArray);
//             // console.log(AdministeredDoseArray);
//         };
//         fetchData();
//     }, []);
//     return (
//         <>
//             <Accordion.Item eventKey="3">
//             <Accordion.Header>Administered</Accordion.Header>
//                 {Administered.map((pres) => {
//                 console.log(pres.quantity);
//                 console.log(pres.adminsteredDose.length);
//                 return (
//                     <>
//                     <Accordion.Body>
//                             {/* --------------check---------------- */}
                            
//                             <div class="col-md-3">
//                                 <h1>{ pres.quantity}</h1>        
//                                 <h1>{ pres.adminsteredDose.length}</h1>        
//                             <PieChart
//                                 data={[
//                                     {
//                                         title: "One",
//                                         value: pres.quantity,
//                                         color: "#00A99D",
//                                     },
//                                     {
//                                         title: "Two",
//                                         value: pres.adminsteredDose.length,
//                                         color: "#0072CE",
//                                     },
//                                 ]}
//                             />
//                         </div>
//                         </Accordion.Body>
//                     </>
//                 );
//             })}
//             </Accordion.Item>
//         </>
//     );
// };
