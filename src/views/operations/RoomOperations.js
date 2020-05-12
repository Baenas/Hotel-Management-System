import React, { Component } from 'react'
import Sidebar from "../../components/Sidebar";
import MainCards from "../../components/cards/MainCards";
import { Link } from "react-router-dom";

class RoomOperations extends Component {

    render() {
        return (
            <div>
                <Sidebar />
                <div className="main dashboard-container">
                    <Link to="/checking">
                        <MainCards color="main-cards button-green" title="Checking" />
                    </Link>
                    <MainCards color="main-cards button-red" title="CheckOut" />
                </div>
            </div>
        )
    }
}

export default RoomOperations   