import React, { Component } from 'react'
import Sidebar from "../../components/Sidebar";
import CardL from "../../components/cards/CardL";
import apiClient from '../../services/loginService';
import { Redirect } from 'react-router-dom'
class AddRoom extends Component {
    state = {
        error: null,
        redirect: null,
        roomName: "",
        roomType: "Double",
        roomFloor: "",
        roomWifi: "",
        roomPhone: "",
        roomPrice: "100",
        state: "Empty"

    }

    handlePrice = () => {

    }
    handleSubmit = (e) => {
        e.preventDefault()

        const { roomName, roomType, roomFloor, roomWifi, roomPhone, roomPrice, state } = this.state
        apiClient.oneMoreRoom({ roomName, roomType, roomFloor, roomWifi, roomPhone, roomPrice, state }).then(() => {
            this.setState({ redirect: "/rooms/" });
        }).catch(() => {
            this.setState({ error: "Not valid" });

        })


    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,

        })

        this.calculatePrice()
    }

    calculatePrice = () => {
        // Precios habitacion
        const { roomType } = this.state

        switch (roomType) {
            case "Double":

                this.setState({ roomPrice: 100 })
                break;
            case "Single":
                this.setState({ roomPrice: 70 })

                break;
            default:
                break;
        }

    }
    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return (
            <div>
                <Sidebar />
                <form onSubmit={this.handleSubmit}>
                    <div className="container-forms">

                        <CardL title="Add Room" />
                        <label className="" ><b>Number</b></label>
                        <input onChange={this.handleChange} name="roomName" className="input-text-form" placeholder="Room Number" type="text" />
                        <label className="" ><b>Type</b></label>

                        <select name="roomType" onChange={this.handleChange} className="input-text-form" >
                            <option value="Double" >Double</option>
                            <option value="Single" >Single</option>
                        </select>

                        <label className="" ><b>Floor</b></label>
                        <input onChange={this.handleChange} className="input-text-form" name="roomFloor" placeholder="Room Floor" type="text" />
                        <label className="" ><b>Wifi</b></label>
                        <input onChange={this.handleChange} className="input-text-form" name="roomWifi" placeholder="Room Wifi" type="text" />
                        <label className="" ><b>Phone</b></label>
                        <input onChange={this.handleChange} className="input-text-form" name="roomPhone" placeholder="Room Phone" type="text" />
                        <label className="" ><b>Price</b></label>
                        <input className="input-text-form" onClick={this.calculatePrice} name="roomPrice" defaultValue={this.state.roomPrice} placeholder="Price" type="text" />
                        <label className="" ><b>State</b></label>
                        <input className="input-text-form" onClick={this.calculatePrice} name="roomPrice" defaultValue={this.state.state} placeholder="Price" type="text" />
                    </div>
                    {this.state.error}
                    <div className="container-forms">
                        <input value="Add" type="submit" />
                    </div>
                </form>
            </div>
        )
    }
}
export default AddRoom