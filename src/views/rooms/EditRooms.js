import React, { Component } from 'react'
import CardL from "../../components/cards/CardL";
import axios from "axios";
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
            this.setState({ redirect: "/rooms" })
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
                roomWifi: room.data.roomWifi,
                roomName: room.data.roomName,
                roomFloor: room.data.roomFloor,
                roomPhone: room.data.roomPhone,
                roomType: room.data.roomType,
                roomPrice: room.data.roomPrice,
                state: room.data.state


            })
        })

    }

    render() {
        const { rooms, roomWifi } = this.state

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

                <div className="container-forms">


                    <CardL title="Get room" />

                    <select onChange={this.handleFill} name="roomName" className="input-text-form" >

                        {List}

                    </select>


                    <form onSubmit={this.handleSubmit}>
                        <div className="container-forms">

                            <CardL title="Edit Room" />

                            <label className="" ><b>Number</b></label>
                            <input onChange={this.handleChange} name="roomName" className="input-text-form" defaultValue={this.state.roomName} placeholder="Room Number" type="text" />
                            <label className="" ><b>Type</b></label>


                            <select name="roomType" onChange={this.handleChange} className="input-text-form" >
                                <option defaultValue={this.state.roomType} value={this.state.roomType} >{this.state.roomType}</option>
                                <option value="Double" >Double</option>
                                <option value="Single" >Single</option>
                            </select>

                            <label className="" ><b>Floor</b></label>
                            <input onChange={this.handleChange} className="input-text-form" name="roomFloor" defaultValue={this.state.roomFloor} placeholder="Room Floor" type="text" />
                            <label className="" ><b>Wifi</b></label>
                            <input onChange={this.handleChange} className="input-text-form" name="roomWifi" defaultValue={this.state.roomWifi} placeholder="Room Wifi" type="text" />
                            <label className="" ><b>Phone</b></label>
                            <input onChange={this.handleChange} className="input-text-form" name="roomPhone" defaultValue={this.state.roomPhone} placeholder="Room Phone" type="text" />
                            <label className="" ><b>Price</b></label>
                            <input onChange={this.handleChange} className="input-text-form" onClick={this.calculatePrice} name="roomPrice" defaultValue={this.state.roomPrice} placeholder="Price" type="text" />
                            <label className="" ><b>State</b></label>
                            <input onChange={this.handleChange} className="input-text-form" name="state" defaultValue={this.state.state} placeholder="State" type="text" />

                            <input value="Add" type="submit" />
                        </div>
                        {this.state.error}
                    </form>
                </div >
            </div >

        )
    }
}
export default EditRoom 