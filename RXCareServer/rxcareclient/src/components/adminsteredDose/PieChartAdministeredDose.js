import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const PieChartAdministeredDose = ({ patient_Id }) => {
    const [chartData, setChartData] = useState({
        datasets: [],
    });

    const [chartOptions, setChartOptions] = useState({});
    /* ----------------------------------------------------- */

    const localSATUser = localStorage.getItem("SAT_user");
    const satUserObject = JSON.parse(localSATUser);
//     /* -------------Display AdministeredDoseList----------------- */
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await fetch(
    //             `https://localhost:7183/api/AdminsteredDose/GetAdminsteredDoses/${patient_Id}`
    //         );
    //         const AdministeredDoseArray = await response.json();
    //     //     setChartData(AdministeredDoseArray);
    //     //     // console.log(AdministeredDoseArray);
    //     // };

    //         setChartData({
    //             labels: "",
    //             datasets: [
    //                 {
    //                     label: "Student attend",
    //                     data: [12, 19, 3, 5, 2, 3],
    //                     backgroundColor: [
    //                         "#628C67",
    //                         "#DCB677",
    //                         "#4B687E",
    //                         "#72A075",
    //                         "#ED6C5C",
    //                     ],
    //                     borderColor: [
    //                         "#628C67",
    //                         "#DCB677",
    //                         "#4B687E",
    //                         "#72A075",
    //                         "#ED6C5C",
    //                     ],
    //                     borderWidth: 1,
    //                 },
    //             ],
    //         });
        
    //         setChartOptions({
    //             responsive: true,
    //             plugins: {
    //                 legend: {
    //                     position: "top",
    //                 },
    //                 title: {
    //                     display: true,
    //                     text: "Average Weakly Attendance",
    //                 },
    //             },
    //         });
    //     };
    //     fetchData();
    // }, []);
//---------------------------------------------
//var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new chartData( {
  type: 'pie',
  data: {
    labels: ["Green", "Blue", "Black"],
    datasets: [{
      backgroundColor: [
        "#2ecc71",
        "#e74c3c",
        "#34495e"
      ],
      data: [12, 19,  7]
    }]
  }
});
//---------------------------------------------    



    return (
        <>
{/*             // <div className="barChart">
            //     <Bar
            //         options={chartOptions}
            //         data={chartData}
            //         style={{ fontSize: "8px" }}
            //     />
            // </div> */}

            <div class="container">
  <h2>Chart.js — Pie Chart Demo</h2>
  <div>
    <canvas id="myChart" height="100" ></canvas>
  </div>
</div>
        </>
    );
};








// import { useState, useEffect, useRef } from "react";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// import { Pie } from "react-chartjs-2";
// import React,{Component} from "react";
// import "../profile/ProfilePatient.css";
// const [AdministeredDose, setAdministeredDose] = useState([]);
// export const PieChartAdministeredDose = ({ patient_Id }) => {
//         const data = {
//             labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//             datasets: [
//                 {
//                     label: '# of Votes',
//                     data: [12, 19, 3, 5, 2, 3],
//                     backgroundColor: [
//                         'Red',
//                         'Blue',
//                         'Yellow',
//                         'Green',
//                         'Purple',
//                         'Orange',
//                     ],
//                     borderColor: [
//                         'Red',
//                         'Blue',
//                         'Yellow',
//                         'Green',
//                         'Purple',
//                         'Orange',
//                     ],
//                     borderWidth: 1,
//                 },
//             ],
//         };
//         const options = {
//             responsiv: true,
//            maintainAspectRatio: false,
//         }
//         return (
//             <div className="App">
//                 <h1>Pie Chart using Chart JS</h1>
//                 <div>
//                     <Pie height={450} width={1288} data={data} options={options} ></Pie>
//                 </div>
//             </div>
//         )
//     }



// // /*             <Accordion.Item eventKey="1">
// //                 <Accordion.Header>COMMENTS TEST</Accordion.Header>
// //                 <section key={`com_${patient_Id}`} className="">
// //                     {AdministeredDose.map((com) => {
// //                         return <AdministeredDose Id={com.id} />;
// //                     })}
// //                 </section>
// //             </Accordion.Item> 
// // */