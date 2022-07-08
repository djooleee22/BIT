import React from "react";
import "./header.scss"

function Header(props) {
    return <div id="header">
        <div className="logo">LBS</div>
        <div onClick={props.myF} className="hire-btn">Hire new person</div>
        </div>
}

export default Header;