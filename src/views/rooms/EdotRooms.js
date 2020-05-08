import React, { Component } from 'react'
import CardL from "../../components/cards/CardL";
import axios from "axios";

class EditRoom extends Component {

    state = {
        rooms: [],
        roomName: "",
        roomType: "",
        roomFloor: "",
        roomWifi: "",
        roomPhone: "",
        roomPrice: "",
        roomId: '',
        thisroom: []

    }
    componentDidMount() {
        axios.get("http://localhost:3000/rooms").then((rooms) => {
            this.setState({
                rooms: rooms.data,
                roomId: rooms.data[0]._id
            })

        })


    }

    handlePrice = () => {

    }
    handleSubmit = (e) => {
        e.preventDefault();

        const { roomName, roomType, roomFloor, roomWifi, roomPhone, roomPrice } = this.state

        axios.post('http://localhost:3000/rooms', {

            roomName, roomType, roomFloor, roomWifi, roomPhone, roomPrice
        })



    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,

        })


    }

    handleFill = (e) => {
        this.setState({
            roomId: e.target.value
        })

        axios.get("http://localhost:3000/rooms/" + this.state.roomId).then((room) => {
            this.setState({
                thisroom: room.data,
                roomWifi: room.data.roomWifi
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
        return (
            <div>

                <form onSubmit={this.handleSubmit}>
                    <div className="container-forms">


                        <CardL title="Get room" />

                        <select onChange={this.handleFill} name="roomName" className="input-text-form" >

                            {List}

                        </select>
                        <input value="Find" type="button" />

                        <CardL title="Edit Room" />

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
                        <input onChange={this.handleChange} className="input-text-form" name="roomWifi" value={roomWifi} placeholder="Room Wifi" type="text" />
                        <label className="" ><b>Phone</b></label>
                        <input onChange={this.handleChange} className="input-text-form" name="roomPhone" placeholder="Room Phone" type="text" />
                        <label className="" ><b>Price</b></label>
                        <input className="input-text-form" onClick={this.calculatePrice} name="roomPrice" defaultValue={this.state.roomPrice} placeholder="Price" type="text" />
                    </div>
                    <div className="container-forms">
                        <input value="Add" type="submit" />
                    </div>
                </form>
            </div >
        )
    }
}
export default EditRoom 