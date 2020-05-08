import React, { Component } from 'react'

import AddRoom from './AddRoom'
import EditRooms from './EdotRooms'

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