import React, { Component } from 'react'
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
            this.setState({ redirect: "/home" });
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

                <form onSubmit={this.handleSubmit}>
                    <div className="form-main">
                        <div className="form-title">
                            <div className="form-title-item">
                                Add Room
                        </div>
                        </div>
                        <div className="form-body">
                            <div className="form-body-item">
                                <div className="form-body-data">
                                    Room name
                            </div>
                                <div className="form-body-data">
                                    <input onChange={this.handleChange} name="roomName" className="input-text-form" defaultValue="" placeholder="Room Number" type="text" />

                                </div>
                            </div>
                            <div className="form-body-item">
                                <div className="form-body-data">
                                    Room Type
                            </div>
                                <div className="form-body-data">
                                    <select name="roomType" onChange={this.handleChange} className="input-text-select" >
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
                                    <input onChange={this.handleChange} className="input-text-form" name="roomFloor" defaultValue="" placeholder="Room Floor" type="text" />

                                </div>
                            </div>


                            <div className="form-body-item">
                                <div className="form-body-data">
                                    Room Wifi
                            </div>
                                <div className="form-body-data">
                                    <input onChange={this.handleChange} className="input-text-form" name="roomWifi" defaultValue="" placeholder="Room Wifi" type="text" />

                                </div>
                            </div>



                            <div className="form-body-item">
                                <div className="form-body-data">
                                    Room Phone
                            </div>
                                <div className="form-body-data">
                                    <input onChange={this.handleChange} className="input-text-form" name="roomPhone" defaultValue="" placeholder="Room Phone" type="text" />

                                </div>
                            </div>

                            <div className="form-body-item">
                                <div className="form-body-data">
                                    Room Price
                            </div>
                                <div className="form-body-data">
                                    <input onChange={this.handleChange} className="input-text-form" name="roomPrice" defaultValue="" placeholder="Room Price" type="text" />

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
                    </div>


                </form>


                {/* <form onSubmit={this.handleSubmit}>
                    <div className="content-main-forms">
                        <div className="content-main-forms-title">
                            Add Room
                         </div>
                        <label className="" ><b>Number</b></label>
                        <input onChange={this.handleChange} name="roomName" className="input-text-form" defaultValue="" placeholder="Room Number" type="text" />
                        <label className="" ><b>Type</b></label>

                        <select name="roomType" onChange={this.handleChange} className="input-text-form" >
                            <option value="Double" >Double</option>
                            <option value="Single" >Single</option>
                        </select>

                        <label className="" ><b>Floor</b></label>
                        <input onChange={this.handleChange} className="input-text-form" name="roomFloor" defaultValue="" placeholder="Room Floor" type="text" />
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
                    <div className="content-main-forms">
                        <input className="round-bottom " value="Add" type="submit" />
                        {this.state.alert}
                    </div>
                </form> */}
            </div>
        )
    }
}
export default AddRoom