import React, { Component } from 'react'

import AddGuest from './AddGuest'
import TopBar from "../../components/bars/Topbar";

class ManageGuest extends Component {
    render() {
        return (
            <div>

                <TopBar />
                <div className=" dashboard-container">
                    {/* <Guest /> */}

                    <AddGuest />

                </div>
            </div>

        )
    }
}
export default ManageGuest