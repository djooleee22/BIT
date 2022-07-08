import React, { useState } from "react";
import "./hiringPage.scss";

function HiringPage(props) {

    const [data, setData] = useState({
        fullName: "",
        technology: [],
        salary: "",
        seniority: "",
        linkedin: "",
    })

    function handle(e) {
        const newData = {...data};
        if(e.target.id === "technology"){
            newData[e.target.id] = e.target.value.split(",");
        } else {
            newData[e.target.id] = e.target.value;
        }
        setData(newData)
        console.log(data)
    }


    function submit() {
        fetch("https://62b47af3530b26da4cbf9534.mockapi.io/frontend", {method: "POST",
        body: JSON.stringify(data), 
        headers: {"Content-Type": "application/json"}}).then(res => res.json()).then(res => props.myF())
    }

    return <div id="hiring-page">
        <div className="wrapper">
            <h2>Hiring form</h2>
            <form action="POST">
                <div className="group">
                    <p>Full Name:</p>
                    <input onChange={handle} type="text" id="fullName" name="fullName"/>
                </div>

                <div className="group">
                    <p>Technologies:</p>
                    <input onChange={handle} type="text" id="technology" name="technology" />
                </div>

                <div className="group">
                    <p>Salary:</p>
                    <input onChange={handle} type="number" id="salary" name="salary"/>
                </div>

                <div className="group">
                    <p>Seniority:</p>
                    <input onChange={handle} type="text" id="seniority" name="seniority"/>
                </div>

                <div className="group">
                    <p>Linkedin:</p>
                    <input onChange={handle} type="text" id="linkedin" name="linkedin"/>
                </div>

                <button onClick={() => {
                    submit()
                }} type="button" className="submit">SUBMIT</button>
            </form>
        </div>
    </div>
}

export default HiringPage