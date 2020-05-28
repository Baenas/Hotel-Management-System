import React, { Component } from 'react'
import TopBar from "../../components/bars/Topbar";

import AddRoom from './AddRoom'
import EditRooms from './EditRooms'

class ManageRooms extends Component {

    render() {
        return (

            <div>

                <TopBar />
                <div className=" dashboard-container">
                    <AddRoom />
                    <EditRooms />
                </div>

            </div>

        )
    }
}
export default ManageRooms