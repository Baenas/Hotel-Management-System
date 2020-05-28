import React, { Component } from 'react'
import apiClient from "../../services/loginService";
import { Redirect } from 'react-router-dom'
class EditRoom extends Component {

    state = {

        error: "",
        redirect: null,
        rooms: [],
        roomName: "",
        roomType: "",
        roomFloor: "",
        roomWifi: "",
        roomPhone: "",
        roomPrice: "",
        roomId: '',
        state: "",
        thisroom: []

    }
    componentDidMount() {
        apiClient
            .roomsAll().then((rooms) => {
                this.setState({
                    rooms: rooms.data,
                })

            })

    }

    handlePrice = () => {

    }
    handleSubmit = (e) => {


        e.preventDefault();

        const { roomName, roomType, roomFloor, roomWifi, roomPhone, roomPrice, state } = this.state


        apiClient.updateRoom(this.state.thisroom._id, { roomName, roomType, roomFloor, roomWifi, roomPhone, roomPrice, state }).then(() => {
            this.setState({ redirect: "/home" })
        }).catch(() => {
            this.setState({ error: "No valid" })
        })




    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,

        })



    }

    handleFill = (e) => {

        e.preventDefault();

        apiClient.oneRoom(e.target.value).then((room) => {
            this.setState({
                thisroom: room.data,

                state: room.data.state,
                roomName: room.data.roomName,
                roomType: room.data.roomType,
                roomFloor: room.data.roomFloor,
                roomWifi: room.data.roomWifi,
                roomPhone: room.data.roomPhone,
                roomPrice: room.data.roomPrice,


            })
        })

    }

    render() {
        const { rooms, thisroom } = this.state

        const List = rooms.map(function (elem, index) {
            // return  elem.launches+10;
            return (

                <option key={index} value={elem._id} >{elem.roomName}</option>


            );
        });
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return (

            <div>



                {/* Update room

                    <div className="form-title">
                    <div className="form-title-item">
                    </div>
                    <select onChange={this.handleFill} name="roomName" className="input-text-form" >

                        <option  ></option>

                        {List}

                    </select>

                </div> */}





                <form onSubmit={this.handleSubmit}>
                    <div className="form-main">
                        <div className="form-title">
                            <div className="form-title-item">
                                Edit  Room
                        </div>
                        </div>
                        <div className="form-body">
                            <div className="form-body-item">

                                <div className="form-body-data">
                                    <select onChange={this.handleFill} name="roomName" className="input-text-select" >

                                        <option></option>

                                        {List}

                                    </select>
                                </div>
                            </div>
                            <div className="form-body-item">
                                <div className="form-body-data">
                                    Room name
                            </div>
                                <div className="form-body-data">
                                    <input onChange={this.handleChange} name="roomName" className="input-text-form" defaultValue={thisroom.roomName} placeholder="Room Number" type="text" />

                                </div>
                            </div>
                            <div className="form-body-item">
                                <div className="form-body-data">
                                    Room Type
                            </div>
                                <div className="form-body-data">
                                    <select name="roomType" onChange={this.handleChange} defaultValue={thisroom.roomType} className="input-text-select" >
                                        <option value={thisroom.roomType} >{thisroom.roomType}</option>
                                        <option value="Double" >Double</option>
                                        <option value="Single" >Single</option>
                                    </select>
                                </div>
                            </div>


                            <div className="form-body-item">
                                <div className="form-body-data">
                                    Room Floor
                            </div>
                                <div className="form-body-data">
                                    <input onChange={this.handleChange} className="input-text-form" name="roomFloor" defaultValue={thisroom.roomFloor} placeholder="Room Floor" type="text" />

                                </div>
                            </div>


                            <div className="form-body-item">
                                <div className="form-body-data">
                                    Room Wifi
                            </div>
                                <div className="form-body-data">
                                    <input onChange={this.handleChange} className="input-text-form" name="roomWifi" defaultValue={thisroom.roomWifi} placeholder="Room Wifi" type="text" />

                                </div>
                            </div>



                            <div className="form-body-item">
                                <div className="form-body-data">
                                    Room Phone
                            </div>
                                <div className="form-body-data">
                                    <input onChange={this.handleChange} className="input-text-form" name="roomPhone" defaultValue={thisroom.roomPhone} placeholder="Room Phone" type="text" />

                                </div>
                            </div>

                            <div className="form-body-item">
                                <div className="form-body-data">
                                    Room Price
                            </div>
                                <div className="form-body-data">
                                    <input onChange={this.handleChange} className="input-text-form" name="roomPrice" defaultValue={thisroom.roomPrice} placeholder="Room Price" type="text" />

                                </div>
                            </div>
                            <div className="form-body-item">
                                <div className="form-body-data">
                                    Room State
                            </div>
                                <div className="form-body-data">
                                    <input onChange={this.handleChange} className="input-text-form" name="state" defaultValue={thisroom.state} placeholder="Room staterice" type="text" />

                                </div>
                            </div>


                        </div>


                        <div className="form-title">
                            <div className="form-title-item">
                                <button type="submit" className="button-submit" >
                                    Add
                            </button>
                            </div>
                        </div>
                        {this.state.error}
                    </div>

                </form>
            </div>
        )
    }
}
export default EditRoom 