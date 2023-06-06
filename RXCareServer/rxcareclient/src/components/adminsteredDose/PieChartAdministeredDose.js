// import { useState, useEffect, useRef } from "react";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// import { Pie } from "react-chartjs-2";
// import React,{Component} from "react";
// import "../profile/ProfilePatient.css";

// export const PieChartAdministeredDose = ({ patient_Id }) => {
//     const [AdministeredDose, setAdministeredDose] = useState([]);


//     /* -------------Display AdministeredDoseList----------------- */
//     useEffect(() => {
//         const fetchData = async () => {
//             const response = await fetch(
//                 `https://localhost:7183/api/AdminsteredDose/GetAdminsteredDoses/${patient_Id}`
//             );
//             const AdministeredDoseArray = await response.json();
//             setAdministeredDose(AdministeredDoseArray);
//             console.log(AdministeredDoseArray);
//         };
//         fetchData();
//     }, []);
//     //TODO: Update FORM

//     class PieChart extends React.Component {
//         //----------------------------------------------------------------
//         constructor(props) {
//             super(props)
//             this.state = {
//                 labels: [take, notTake],
//                 datasets: [{
//                     data: [2000, 8000],
//                     backgroundColor: ["red", "green"]
//                 }]
//             }
//         }

//         render() {
//             return (
//                 <>

//                     <div>
//                         <h1>Administered Dose Chart</h1>
//                         <Pie
//                             data={{
//                                 labels: this.state.labels,
//                                 database: this.state.database,
//                             }}
//                             height='50%'
//                         />
//                         <br />
//                     </div>
//                 </>
//             )
//         }
//     }
// }



// /*             <Accordion.Item eventKey="1">
//                 <Accordion.Header>COMMENTS TEST</Accordion.Header>
//                 <section key={`com_${patient_Id}`} className="">
//                     {AdministeredDose.map((com) => {
//                         return <AdministeredDose Id={com.id} />;
//                     })}
//                 </section>
//             </Accordion.Item> 
// */