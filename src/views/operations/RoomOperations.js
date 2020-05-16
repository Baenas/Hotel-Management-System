import React, { Component } from 'react'
import Sidebar from "../../components/Sidebar";
import MainCards from "../../components/cards/MainCards";
import { Link } from "react-router-dom";

class RoomOperations extends Component {
    state = {

    }


    render() {
        return (
            <div>
                <Sidebar />
                <div className="main dashboard-container">
                    <Link to="/checking">
                        <MainCards color="verde" title="Checking" />
                    </Link>


                    <Link to="/manageroom">
                        <MainCards color="verde" title="Manage" />
                    </Link>
                </div>
            </div>
        )
    }
}

export default RoomOperations   