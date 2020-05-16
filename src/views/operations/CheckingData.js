import React, { Component } from 'react'

import CardL from "../../components/cards/CardL";
import apiClient from '../../services/loginService';
import { Redirect } from 'react-router-dom'

class CheckingData extends Component {
    state = {
        nights: 1,
        day_To: '',
        day_From: '',
        redirect: null,
        error: "",
        roomID: "",
        guestID: this.props.guest,
        data: this.props.data
    }


    handleChange = (e) => {

        this.setState({
            [e.target.name]: e.target.value

        })
    }
    handleChecking = (e) => {
        e.preventDefault();

        const { nights, day_From, day_To, guestID } = this.state
        const roomID = this.props.data._id
        /////checking
        let estado = "active"
        //id,id,night,to,from

        ////habit
        let state = "active"

        apiClient.checking({ guestID, roomID, nights, day_From, day_To, estado }).then(() => {
            apiClient.updateRoomInd(roomID, { state, guestID })
        }).then(() => {

            this.setState({
                redirect: '/rooms'
            })

        }).catch(() => {
            this.setState({
                error: "No Valid Data"
            })
        })
    }
    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return (
            <div>
                <div className="dashboard-container container-forms ">
                    <CardL title="Info" />

                    <label className="" ><b>Room Name</b></label>
                    <input onChange={this.handleChange} className="input-text-form" disabled defaultValue={this.props.data.roomName} name="roomName" placeholder="Room" type="text" />
                    <input onChange={this.handleChange} className="input-text-form" disabled defaultValue={this.props.data._id} name="roomID" placeholder="Room ID" type="text" />
                    <label className="" ><b>Nights</b></label>
                    <input onChange={this.handleChange} className="input-text-form" name="nights" defaultValue={this.state.nights} placeholder="Nights" type="number" />
                    <label className="" ><b>From</b></label>
                    <input onChange={this.handleChange} className="input-text-form" min='2020-01-01' defaultValue={this.state.day_From} value={this.state.day_From} name="day_From" placeholder="From" type="date" />
                    <label className="" ><b>To</b></label>
                    <input onChange={this.handleChange} className="input-text-form" defaultValue={this.state.day_To} value={this.state.day_To} name="day_To" placeholder="To" type="date" />
                    <button onClick={this.handleChecking} className="button-fix">
                        Checking
                </button>

                    {this.state.error}
                </div>

            </div>
        )
    }
}



export default CheckingData