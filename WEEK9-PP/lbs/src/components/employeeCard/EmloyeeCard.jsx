import React, { useEffect } from "react";
import "./employeeCard.scss"

function EmployeeCard(props){

    
    return <div id="card">
        <h2>{props.dev.fullName}</h2>
        <h3>Seniority: {props.dev.seniority}</h3>
        <h3>Salary: {props.dev.salary}</h3>
        <ul>
            {props.dev.technology.map(el => <li>{el}</li>)}
        </ul>
        <button onClick={() => {
            props.toggleModal();
            props.myF(props.dev)
        }}>info</button>
    </div>
}

export default EmployeeCard