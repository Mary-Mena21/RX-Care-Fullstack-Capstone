// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "../profile/ProfilePatient.css";
// //import "./PrescriptionList.css";
// import Accordion from "react-bootstrap/Accordion";
// import { Button } from "bootstrap";

// export const AdministeredDoseList = ({ patient_Id }) => {
//     const [AdministeredDose, setAdministeredDose] = useState([]);

//     /* -------------Display AdministeredDoseList----------------- */
//     useEffect(() => {
//         const fetchData = async () => {
//             const response = await fetch(
//                 `https://localhost:7183/api/AdminsteredDose/GetAdminsteredDoses/${patient_Id}`
//             );
//             const AdministeredDoseArray = await response.json();
//             setPrescription(AdministeredDoseArray);
//             console.log(AdministeredDoseArray);
//         };
//         fetchData();
//     }, []);
//     //TODO: Update FORM
//     return (
//         <>
//             <Accordion.Item eventKey="1">
//                 <Accordion.Header>COMMENTS TEST</Accordion.Header>
//                 <section key={`com_${patient_Id}`} className="">
//                     {comment.map((com) => {
//                         return <AdministeredDose Id={com.id} />;
//                     })}
//                 </section>
//             </Accordion.Item>
//         </>
//     );
// };
