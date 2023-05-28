// import React from "react";
// import { Outlet, Route, Routes } from "react-router-dom";
// import { Home } from "../home/Home";
// import { Profile } from "../profile/Profile";
// import { ProfileDoctor } from "../profile/ProfileDoctor";
// //import { DoctorsList } from "../doctors/DoctorsList";

// export const DoctorViews = () => {
//     var appUser = localStorage.getItem("app_user");
//     var appUserObject = JSON.parse(appUser);
//     console.log(appUserObject);
    
//     return (
//         <React.StrictMode>
//             <Routes>
//                 <Route
//                     path="/"
//                     element={
//                         <>
//                             <Outlet />
//                         </>
//                     }
//                 >
//                     <Route path="/" element={<Home />} />
//                     <Route path="profileDoctor" element={<ProfileDoctor />} />
//                     {/* <Route path="doctor" element={<DoctorsList />} /> */}
//                     {/* <Route path="Profile" element={<Profile />} /> */}
//                 </Route>
//             </Routes>
//         </React.StrictMode>
//     );
// };
