
import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { Home } from "../home/Home";
import { ProfileDoctor } from "../profile/ProfileDoctor";
// import { Profile } from "../profile/Profile";
// import { Doctor } from "../doctors/Doctor";
// import { PatientProfileDetails } from "../patients/PatientProfileDetails";
// import { PrescriptionList } from "../prescription/PrescriptionList";
//import { PrescriptionEdit } from "../prescription/PrescriptionEdit";
// import { CommentList } from "../comments/CommentList";
// import { AddPrescriptionForm } from "../prescription/Modal";
// import { AddComment } from "../comments/AddComment";
// import { PrescriptionCheckUser } from "../prescription/PrescriptionCheckUser";
import { DoctorsList } from "../doctors/DoctorsList";
import { PatientsList } from "../patients/PatientsList";
import { PatientDetails } from "../patients/PatientDetails";
import { PatientEdit } from "../patients/PatientEdit";
import { AddPrescription } from "../prescription/AddPrescription";
import { AddCommentFromDoctor } from "../comments/AddCommentFromDoctor";
import { AddCommentFromPatient } from "../comments/AddCommentFromPatient";
import { UpdateComment } from "../comments/UpdateComment";
import { UpdatePrescription } from "../prescription/UpdatePrescription";
import { Profile2 } from "../profile/Profile2";
import { Login } from "../auth/Login";


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
                    <Route path="/login" element={<Login />} /> 
                    <Route path="profileDoctor" element={<ProfileDoctor />} />
                    <Route path="doctorList" element={<DoctorsList />} />
                    <Route path="profile2" element={<Profile2 />} />
                    {/*  <Route path="doctor" element={<Doctor />} /> */}
                  {/*   <Route path="profile" element={<Profile />} /> */}
                    {/* <Route path="patientsList/:patient_Id" element={<Profile />}/> */}
                    
                   {/*                     <Route
                                           path="profile/AddCommentFromPatient/:patient_Id"
                                           element={<AddCommentFromPatient/>}
                                       /> 
                    */}

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
                        path="patientsList/:patient_Id/addCommentFromDoctor/addComment/:patient_Id"
                        element={<AddCommentFromDoctor />}
                    />

                    
{/*                     <Route
                    path="profile2/prescriptionCheckUser/:patient_Id"
                    element={<PrescriptionCheckUser/>}
                />  */}

                    
{/*                     <Route
                    path="UpdateComment/:patient_Id"
                    element={<UpdateComment />}
                /> */}
                    
                    {/*                     <Route
                        path="patientsList/:patient_Id/addCommentFromDoctor/add/:patient_Id"
                        element={<AddCommentFromDoctor/>}
                    /> */}

                    {/* <Route path="prescriptions" element={<Prescriptions />} /> */}
                    {/*                     <Route path="profile#health" element={<PatientsList />} /> */}
                    ///profile#home
                    
                <Route
                path="patientsList/:patient_Id/UpdateComment/edit/:Id"
                element={<UpdateComment />}
                    />
                    
                    <Route
                    path="patientsList/:patient_Id/UpdatePrescription/edit/:Id"
                    element={<UpdatePrescription />}
                />
                    
                <Route path="patientsList" element={<PatientsList />} />

                </Route>
            </Routes>
        </React.StrictMode>
    );
};
//PrescriptionForm