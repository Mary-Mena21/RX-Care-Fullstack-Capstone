// import React, { useEffect, useState } from "react";
// // import { Link, useNavigate } from "react-router-dom";
// import "../profile/ProfilePatient.css";
// import Accordion from "react-bootstrap/Accordion";
// import {TESTComment } from "./TESTComment";
// // import { Button } from "bootstrap";

// export const TESTCommentListContent = ({ patient_Id }) => {
//     const [comment, setComment] = useState([]);
//     //const [Medicine, setMedicine] = useState([]);
//     console.log(patient_Id);
//     /* -------------Display CommentList----------------- */
//     //TODO: Solution for null comment : if (Comments == null) { return NotFound(); } added in CommentController
//     useEffect(() => {
//         const fetchData = async () => {
//             const response = await fetch(
//             //    `https://localhost:7183/api/Comment/${patient_Id}`
//                 `https://localhost:7183/api/Comment/commentOnMedicine/${patient_Id}`
//             );
//             const CommentData = await response.json();
//             setComment(CommentData);
//             console.log(CommentData);
//         };
//         fetchData();
//     }, []);
//     //-----------------------------------------------------
//     //TODO: DISPLAY CommentList----------------

//     //TODO: Why comment appears one instead of two comments
//     //TODO: Solution : You should add Id to Component props
//     let lastCom = comment[comment.length - 1];
//     let lastComment = comment.at(-1);
//     console.log(comment.at(-1));
//     console.log(lastCom);
//     //console.log(lastCom[lastCom.id]);

//     return (
//         <>
//   {/*       <div className=" active3 container">
//         <div key={`com_${patient_Id}`} className="">  */}

//             {comment.map((com) => {
//             return (   
//                 <div className=" active3 container">
//                 <p class=" profile-tab">{com.medicine.medicineName}</p>
//                <p class="p-comment pd-comment">✋{com.pComment}</p>
//                    <br />
//                    <p class="d-comment pd-comment">{com.dComment} 🩺 </p>
//                </div> 
//                     );
//             })}   
//                    {/*   </div> 
//                      </div>  */}

//         </>
//     );
// };

// /*     (
//         <>
// {            <section key={`books`} className="books">
//                 {comment.map((com) => {
//                     return (
//                         <>
//                             <Comment
//                                 patient_Id={patient_Id}
//                                 medicineId={com?.medicineId}
//                                 pComment={com?.pComment}
//                                 pCommentDate={com?.pCommentDate}
//                                 dComment={com?.dComment}
//                                 dCommentDate={com?.dCommentDate}
//                                 medicineName={com?.medicine?.medicineName}
//                             />
//                         </>
//                     );
//                 })}
//             </section>}
//         </>
//     ); */



//     /*
//                 <Accordion.Item eventKey="1">
//                 <Accordion.Header>COMMENTS</Accordion.Header>

//                 {comment.map((com) => {
//                     console.log(com);
//                     return (
//                         <>
//                             <Accordion.Body>
//                                 <div className="container active">
//                                     <h5>
//                                         medicineName:{com.medicine.medicineName}
//                                         XXX
//                                     </h5>
//                                     <p>P:{com.pComment}XXX</p>
//                                     <p>D:{com.dComment}</p>

//                                     <Link to={`/UpdateComment/${patient_Id}`}>
//                                         {" "}
//                                         <input
//                                             type="submit"
//                                             class="profile-edit-btn nav-item"
//                                             name="btnAddMore"
//                                             value="ADD-REPLY"
//                                         />
//                                     </Link>
//                                 </div>
//                             </Accordion.Body>
//                         </>
//                     );
//                 })}
//             </Accordion.Item>
//     */
//    /*                       medicineId={com?.medicineId}
//                          pComment={com?.pComment}
//                         pCommentDate={com?.pCommentDate}
//                         dComment={com?.dComment}
//                         dCommentDate={com?.dCommentDate}
//                         medicineName={com?.medicine?.medicineName}   */