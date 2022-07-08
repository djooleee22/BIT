import React from "react";
import "./homePage.scss";
import EmployeeCard from "../../components/employeeCard/EmloyeeCard";
import Modal from "../../components/Modal/Modal";
import { useState } from "react";

function HomePage (props) {
    const[modalOpen, setModalOpen] = useState(false)
    const [devModal, setDevModal] = useState({})

    function getDevModal(el) {
        setDevModal(el)
    }

    function toggleModal() {
        setModalOpen(!modalOpen)
    }

    return <div id="home-page">
        {props.devs.map(el => <EmployeeCard toggleModal={toggleModal} myF={getDevModal} dev={el} />)}
        {modalOpen && <Modal dev={devModal} toggleModal={toggleModal}/>}
    </div>
}

export default HomePage