import React from "react";
import "./modal.scss"

function Modal (props) {
    const name = props.dev.fullName.split(" ").join("_")

    return <div id="modal">
        <div className="modal-sm">
        <h2>{props.dev.fullName}</h2>
        <h3>Seniority: {props.dev.seniority}</h3>
        <h3>Salary: {props.dev.salary}</h3>
        <ul>
            {props.dev.technology.map(el => <li>{el}</li>)}
        </ul>
            <a href="https://www.linkedin.com/">{`www.linkedin.com/${name}`}</a>
        </div>
        <button onClick={props.toggleModal} className="x">X</button>
    </div>
}

export default Modal