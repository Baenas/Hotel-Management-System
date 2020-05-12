import React, { Component } from 'react'

import Guest from './Guest'
import AddGuest from './AddGuest'

class ManageGuest extends Component {
    render() {
        return (
            <div className="main dashboard-container">
                <Guest />
                <AddGuest />

            </div>
        )
    }
}
export default ManageGuest