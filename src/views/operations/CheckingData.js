import React, { Component } from 'react'

import apiClient from '../../services/loginService';
import { Redirect } from 'react-router-dom'

class CheckingData extends Component {
    state = {
        nights: 1,
        dashkey: 0,
        day_To: '',
        day_From: '',
        redirect: null,
        error: "",
        roomID: this.props.room,
        roomName: "",
        guestID: '',
        data: this.props.data,
        fullGuest: ''
    }

    makeid(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;

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
        let dashkey = this.makeid(5)
        let extraguest = {
            name: this.props.extraName,
            age: this.props.extraAge
        }

        apiClient.checking({ guestID, roomID, nights, day_From, day_To, estado, extraguest, dashkey }).then(() => {
            apiClient.updateRoomInd(roomID, { state, guestID }).then(() => {
            })
        }).then(() => {

            this.setState({
                redirect: '/home'
            })

        }).catch(() => {
            this.setState({
                error: "No Valid Data"
            })
        })
    }
    idstate = () => {
        let guestdata = localStorage.getItem('guest')

        this.setState({
            guestID: JSON.parse(guestdata)._id,
            fullGuest: JSON.parse(guestdata)

        })
    }
    render() {

        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return (
            <div className="form-main">
                <div className="form-title">
                    <div className="form-title-item">
                        Set   Room
                        </div>
                </div>

                <div className="form-body">


                    <div className="form-body-item">
                        <div className="form-body-data">
                            Guest ID
                            </div>
                        <div className="form-body-data">
                            <input onChange={this.handleChange} name="roomName" onClick={this.idstate} className="input-text-form" defaultValue={this.state.guestID} placeholder="Guest ID" type="text" />

                        </div>
                    </div>

                    <div className="form-body-item">
                        <div className="form-body-data">
                            Guest Name
                            </div>
                        <div className="form-body-data">
                            <input onChange={this.handleChange} name="roomName" onClick={this.idstate} className="input-text-form" defaultValue={this.state.fullGuest.guestName} placeholder="Guest Name" type="text" />

                        </div>
                    </div>
                    <div className="form-body-item">
                        <div className="form-body-data">
                            Room name
                            </div>
                        <div className="form-body-data">
                            <input onChange={this.handleChange} name="roomName" className="input-text-form" defaultValue={this.props.data.roomName} placeholder="Room Number" type="text" />

                        </div>
                    </div>

                    <div className="form-body-item">
                        <div className="form-body-data">
                            Room ID
                            </div>
                        <div className="form-body-data">
                            <input onChange={this.handleChange} className="input-text-form" disabled defaultValue={this.props.data._id} name="roomID" placeholder="Room ID" type="text" />


                        </div>
                    </div>
                    <div className="form-body-item">
                        <div className="form-body-data">
                            Room Type
                            </div>
                        <div className="form-body-data">
                            <input onChange={this.handleChange} className="input-text-form" disabled defaultValue={this.props.data.roomType} name="roomID" placeholder="Room ID" type="text" />


                        </div>
                    </div>
                    <div className="form-body-item">
                        <div className="form-body-data">
                            Nights
                            </div>
                        <div className="form-body-data">
                            <input onChange={this.handleChange} className="input-text-form" name="nights" defaultValue={this.state.nights} placeholder="Nights" type="number" />


                        </div>
                    </div>


                    <div className="form-body-item">
                        <div className="form-body-data">
                            From
                            </div>
                        <div className="form-body-data">
                            <input onChange={this.handleChange} className="input-text-form" min='2020-01-01' value={this.state.day_From} name="day_From" placeholder="From" type="date" />


                        </div>
                    </div>

                    <div className="form-body-item">
                        <div className="form-body-data">
                            To
                            </div>
                        <div className="form-body-data">
                            <input onChange={this.handleChange} className="input-text-form" value={this.state.day_To} name="day_To" placeholder="To" type="date" />
                        </div>
                    </div>
                    <div className="form-title">
                        <div onClick={this.handleChecking} className="form-title-item">
                            Done
                        </div>
                    </div>

                    {/* <button onClick={this.handleChecking} className="button-fix">
                        Checking
                </button> */}

                    {this.state.error}
                </div>
            </div>

        )
    }
}



export default CheckingData