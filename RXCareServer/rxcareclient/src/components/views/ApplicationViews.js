// import React from "react";
// import { DoctorViews } from "./DoctorViews";
// import { UserViews } from "./UserViews";

// export const ApplicationViews = () => {
//     const appUser = localStorage.getItem("app_user");
//     const appUserObject = JSON.parse(appUser);

// console.log(appUserObject);
//     if (appUserObject.type === "Doctor") {
//         return <DoctorViews />;
//     } else {
//         return <UserViews />;
//     }
// };
//------------------------------------------------------------------------------

import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { Home } from "../home/Home";
import { Profile } from "../profile/Profile";
import { ProfileDoctor } from "../profile/ProfileDoctor";
import { Doctor } from "../doctors/Doctor";
import { DoctorsList } from "../doctors/DoctorsList";
import { PatientsList } from "../patients/PatientsList";
import { PatientDetails } from "../patients/PatientDetails";
import { PatientProfileDetails } from "../patients/PatientProfileDetails";
import { PatientEdit } from "../patients/PatientEdit";
import { PrescriptionList } from "../prescription/PrescriptionList";
//import { PrescriptionEdit } from "../prescription/PrescriptionEdit";
import { CommentList } from "../comments/CommentList";
import { AddPrescriptionForm } from "../prescription/Modal";
import { AddPrescription } from "../prescription/AddPrescription";
import { AddComment } from "../comments/AddComment";
import { AddCommentFromDoctor } from "../comments/AddCommentFromDoctor";
import { AddCommentFromPatient } from "../comments/AddCommentFromPatient";
import { UpdateComment } from "../comments/UpdateComment";
import { UpdatePrescription } from "../prescription/UpdatePrescription";
import { PrescriptionCheckUser } from "../prescription/PrescriptionCheckUser";
import { Profile2 } from "../profile/Profile2";


export const ApplicationViews = () => {
    var appUser = localStorage.getItem("app_user");
    var appUserObject = JSON.parse(appUser);
    console.log(appUserObject);

    return (
        <React.StrictMode>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Outlet />
                        </>
                    }
                >
                    <Route path="/" element={<Home />} />
                    <Route path="profileDoctor" element={<ProfileDoctor />} />
                    {/*  <Route path="doctor" element={<Doctor />} /> */}
                    <Route path="doctorList" element={<DoctorsList />} />
                  {/*   <Route path="profile" element={<Profile />} /> */}
                    <Route path="profile2" element={<Profile2 />} />
                    {/* <Route path="patientsList/:patient_Id" element={<Profile />}/> */}
                    <Route
                        path="patientsList/:patient_Id"
                        element={<PatientDetails />}
                    />
                    <Route
                        path="patientsList/:patient_Id/patientsList/edit/:patient_Id"
                        element={<PatientEdit />}
                    />

                    <Route
                        path="patientsList/:patient_Id/addPrescription/add/:patient_Id"
                        element={<AddPrescription />}
                    />

                    <Route
                        path="patientsList/:patient_Id/addPrescription/add/:patient_Id"
                        element={<AddPrescription />}
                    />
 
{/*                     <Route
                        path="profile/AddCommentFromPatient/:patient_Id"
                        element={<AddCommentFromPatient/>}
                    /> 
 */}
                    <Route
                        path="patientsList/:patient_Id/profile2/AddCommentFromPatient/:patient_Id"
                        element={<AddCommentFromPatient/>}
                    /> 

                    <Route
                    path="patientsList/:patient_Id/profile2/AddCommentFromPatient/:patient_Id"
                    element={<AddCommentFromPatient/>}
                /> 

                    <Route
                        path="profile2/AddCommentFromPatient/:patient_Id"
                        element={<AddCommentFromPatient/>}
                    /> 

                    
                    <Route
                    path="profile2/prescriptionCheckUser/:patient_Id"
                    element={<PrescriptionCheckUser/>}
                /> 

                    <Route
                        path="patientsList/:patient_Id/addCommentFromDoctor/addComment/:patient_Id"
                        element={<AddCommentFromDoctor />}
                    />
                    
{/*                     <Route
                    path="UpdateComment/:patient_Id"
                    element={<UpdateComment />}
                /> */}
                    
                    
                <Route
                path="patientsList/:patient_Id/UpdateComment/edit/:Id"
                element={<UpdateComment />}
                    />
                    
                    <Route
                    path="patientsList/:patient_Id/UpdatePrescription/edit/:Id"
                    element={<UpdatePrescription />}
                />
                    
{/*                     <Route
                        path="patientsList/:patient_Id/addCommentFromDoctor/add/:patient_Id"
                        element={<AddCommentFromDoctor/>}
                    /> */}

                    //AddPrescriptionForm
                    <Route path="patientsList" element={<PatientsList />} />
                    {/* <Route path="prescriptions" element={<Prescriptions />} /> */}
                    {/*                     <Route path="profile#health" element={<PatientsList />} /> */}
                    ///profile#home
                </Route>
            </Routes>
        </React.StrictMode>
    );
};
//PrescriptionForm