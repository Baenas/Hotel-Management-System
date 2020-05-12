import React, { Component } from 'react'
import Sidebar from "../../components/Sidebar";
import FormGuest from '../../components/forms/FormGuest'
import FindRoom from '../operations/FindRoom';
class Checking extends Component {
    state = {
        guestID: localStorage.getItem('id'),
        roomID: ""

    }

    render() {
        return (
            <div className="main dashboard-container" >
                <Sidebar />
                <FormGuest />
                <FindRoom />



            </div >
        )
    }
}

export default Checking