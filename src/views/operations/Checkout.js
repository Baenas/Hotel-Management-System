import React, { Component } from "react";
import FormGuest from '../../components/forms/FormGuest'
import Sidebar from "../../components/Sidebar";
import apiClient from "../../services/loginService";
import CheckingData from './CheckingData'
import CardL from "../../components/cards/CardL";

class Checkout extends Component {
    state = {
        guestID: '',
        roomID: '',
        selected: '',
        data: ''
    }
    componentDidMount() {
        // let id = this.props.match.params.id
        let id = localStorage.getItem('idoperations')
        apiClient.getChecking(id).then((checkings) => {
            this.setState({
                data: checkings.data,
                guestID: checkings.data.guestID,
                roomID: checkings.data.roomID,
                selected: checkings.data
            })
        })
    }
    render() {
        const { guestID, roomID, data } = this.state
        let fullPrice = roomID.roomPrice * data.nights

        return (
            <div className="main dashboard-container" >
                <Sidebar />
                <FormGuest />


                <div className="dashboard-container container-forms ">
                    <CardL title="Info" />

                    <label className="" ><b>Nights</b></label>
                    <input onChange={this.handleChange} className="input-text-form" defaultValue={data.nights} name="roomName" placeholder="Room" type="text" />
                    <label className="" ><b>Price x Night</b></label>
                    <input onChange={this.handleChange} className="input-text-form" defaultValue={roomID.roomPrice} name="roomID" placeholder="Room ID" type="text" />
                    <label className="" ><b>Total</b></label>
                    <input onChange={this.handleChange} disabled className="input-text-form" value={fullPrice.toString()} name="price" placeholder="Full price" type="number" />

                </div>




            </div >
        )
    }
}


export default Checkout;