// import React, { useEffect, useState } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import "../profile/ProfilePatient.css";
// //import "./PrescriptionList.css";
// import Accordion from "react-bootstrap/Accordion";
// import { Button } from "bootstrap";


// export const PrescriptionCheckUser = () => {
//     const [Prescription, setPrescription] = useState([]);
//     const { patient_Id } = useParams(); //TODO: handle 

//     /* -------------Display PrescriptionList----------------- */
//     useEffect(() => {
//         const fetchData = async () => {
//             const response = await fetch(
//                 `https://localhost:7183/api/prescription/Patient/${patient_Id}`
//             );
//             const PrescriptionListArray = await response.json();
//             setPrescription(PrescriptionListArray);
//             console.log(PrescriptionListArray);
//         };
//         fetchData();
//     }, []);
//     //TODO: Update FORM
//     return (
//         <>
//         <Accordion>
//            <Accordion.Item eventKey="2">
//                 <Accordion.Header>REPORT-</Accordion.Header> 
                
//                  {Prescription.map((pres) => {
//                     return (
//                         <>           
//                        <Accordion.Body>    
//                                 <div class="content-tabs profile-tab">
//                                     <div class="row">
//                                         <div class="tab-pane show active2">
//                                             <br />

//                                             <div class="profile-head">
//                                                 <ul class="nav nav-tabs ">
//                                                     &nbsp;&nbsp;
//                                                     <li class="nav-item">
//                                                         <Link
//                                                             to={`UpdatePrescription/edit/${pres.id}`}
//                                                         >
//                                                             {" "}
//                                                             <input
//                                                                 type="submit"
//                                                                 class="profile-edit-btn-comment"
//                                                                 name="btnAddMore"
//                                                                 value="Update"
//                                                             />
//                                                         </Link>
//                                                     </li>
//                                                     &nbsp;&nbsp;
//                                                     <li class="nav-item">
//                                                         <input
//                                                             type="submit"
//                                                             class="profile-edit-btn-comment"
//                                                             name="btnAddMore"
//                                                             value="Delete"
//                                                             onClick={() => {
//                                                                 window.confirm(
//                                                                     `Are you sure you want to delete Prescription ${pres.medicine.medicineName}?`
//                                                                 ) &&
//                                                                     fetch(
//                                                                         `https://localhost:7183/api/prescription/${pres.id}`,
//                                                                         {
//                                                                             method:
//                                                                                 "DELETE",
//                                                                         }
//                                                                     ).then();
//                                                                 navigate(
//                                                                     "/Students"
//                                                                 );
//                                                             }}
//                                                         />
                                                       
//                                                     </li>
//                                                     &nbsp;&nbsp;
//                                                     <li class="nav-item">
//                                                         <Link
//                                                             to={`reportDose/report/${pres.id}`}
//                                                         >
//                                                             {" "}
//                                                             <input
//                                                                 type="submit"
//                                                                 class="profile-edit-btn-comment"
//                                                                 name="btnAddMore"
//                                                                 value="Report"
//                                                             />
//                                                         </Link>
//                                                     </li>
//                                                 </ul>
//                                                 <hr />
//                                             </div>

//                                             <div class="row">
//                                                 <div class="col-md-3">
//                                                     <label>Drug Name</label>
//                                                 </div>
//                                                 <div class="col-md-3">
//                                                     <p>
//                                                         {
//                                                             pres.medicine
//                                                                 .medicineName
//                                                         }
//                                                     </p>
//                                                 </div>
//                                             </div>

//                                             <div class="row">
//                                                 <div class="col-md-3">
//                                                     <label></label>
//                                                 </div>
//                                                 <div class="col-md-3">
//                                                     <p>
//                                                         <img
//                                                             src={
//                                                                 pres.medicine
//                                                                     .imgUrl
//                                                             }
//                                                             className="medical-img"
//                                                         />
//                                                     </p>
//                                                 </div>

//                                                 <div class="col-md-3">
//                                                     <p>
//                                                         <input type="checkbox"></input>
//                                                     </p>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div> 
//                                 </Accordion.Body>  
//                         </>
//                     );
//                 })} 
                
//              </Accordion.Item>  
//              </Accordion>
//         </>
//     );
// };
