import React, {useEffect, useState} from 'react';
import GridLayout from 'react-grid-layout';
import Navbar from '../component/navbar';
import { Bar,Polar,Line} from 'react-chartjs-2'; 
// import { defaults } from 'react-chartjs-2';

import  "../../node_modules/react-grid-layout/css/styles.css";
import "../../node_modules/react-resizable/css/styles.css";
import axios from '../axios-instance';

// defaults.global.animation = false;

function Analytics() {

    const [empData,setEmpData] = useState([ ]);

    useEffect(()=>{
        axios.get('/empData.json')
        .then(res => {
//            console.log(res.data);
            setEmpData(res.data);
        })
        .catch(error =>{
            console.log(error);
        })
    }, []);

    // console.log(empData.age);
    var empName = Object.keys(empData).map(function (key) {
        return empData[key].name;
    });

    var empAge = Object.keys(empData).map(function (key) {
        return empData[key].age;
    });

    var empJobTitle = Object.keys(empData).map(function (key) {
        return empData[key].jobTitle;
    });

    var empSalary = Object.keys(empData).map(function (key) {
        return empData[key].salary;
    });

    var compyType = Object.keys(empData).map(function (key) {
        return empData[key].companyType;
    });

    var empWorkEx = Object.keys(empData).map(function (key) {
        return empData[key].workEx;
    });


    const layout = [
        {i: 'a', x: 0, y: 0, w: 2.5, h: 2},
        {i: 'b', x: 3, y: 1, w: 2.5, h: 2},
        {i: 'c', x: 0, y: 1, w: 3, h: 2},
        {i: 'd', x: 4, y: 0, w: 3, h: 2}
        ];


    return(
        <React.Fragment>
            <Navbar/>
            {/* {sum} */}
            <div style={{marginLeft:"1rem", padding:"1rem"}}>
                <h1>Analytics of Employ data</h1>
            </div>
            <div style={{padding:"2rem", alignSelf:"center"}}>
              <GridLayout className="layout" layout={layout} cols={6} rowHeight={200} width={1450}>
                <div key="a" >
                    <Bar
                        data={{
                            labels:empName,
                            datasets:[{
                                label: 'Age',
                                data: empAge,
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(255, 206, 86, 0.2)',
                                    'rgba(75, 192, 192, 0.2)',
                                    'rgba(153, 102, 255, 0.2)',
                                    'rgba(255, 159, 64, 0.2)'
                                ],
                                borderColor: [
                                    'rgba(255, 99, 132, 1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(75, 192, 192, 1)',
                                    'rgba(153, 102, 255, 1)',
                                    'rgba(255, 159, 64, 1)'
                                ],
                                borderWidth: 1
                            }]
                        }}
                        weight={200}
                        height={200}
                        options={{
                            maintainAspectRatio: false
                        }}
                    />
                </div>
                <div key="b" >
                    <Polar
                        data={{
                            labels: compyType ,
                              datasets: [{
                                 data: empWorkEx ,
                                backgroundColor: [
                                    'rgb(255, 99, 132)',
                                    'rgb(75, 192, 192)',
                                    'rgb(255, 205, 86)',
                                    'rgb(201, 203, 207)',
                                    'rgb(54, 162, 235)'                                 
                                ],
                                
                              }]
                        }}
                    />
                </div>
                <div key="c">
                <Line
                        data={{
                            labels: empJobTitle,
                              datasets: [{
                                label: 'Emp Salary with Job',                                
                                data: empSalary,
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(255, 206, 86, 0.2)',
                                    'rgba(75, 192, 192, 0.2)',
                                    'rgba(153, 102, 255, 0.2)',
                                    'rgba(255, 159, 64, 0.2)'                                 
                                ],
                                hoverOffset: 4
                              }]
                        }}
                        style={{borderColor:'black'}}
                    />
                </div>
                <div key="d">
                <Line
                        data={{
                            labels: empJobTitle,
                              datasets: [{
                                label: 'Work Experience with Job title',                                
                                data: empWorkEx,
                                backgroundColor: [
                                    'rgb(255, 99, 132)',
                                    'rgb(75, 192, 192)',
                                    'rgb(255, 205, 86)',
                                    'rgb(201, 203, 207)',
                                    'rgb(54, 162, 235)'                                 
                                ],
                                hoverOffset: 4
                              }]
                        }}
                        style={{borderColor:'black'}}
                    />
                </div>
              </GridLayout>

           
            </div> 
       
        </React.Fragment>
        
    );
};

export default Analytics;