import React, { Component } from 'react'

import AddRoom from './AddRoom'
import EditRooms from './EditRooms'

class ManageRooms extends Component {
    render() {
        return (
            <div className="main dashboard-container">
                <AddRoom />
                <EditRooms />
            </div>
        )
    }
}
export default ManageRooms