import React, { Component } from 'react'
import Sidebar from "../../components/Sidebar";
import FormGuest from '../../components/forms/FormGuest'
import FindRoom from '../operations/FindRoom';
import CheckingData from './CheckingData'
import apiClient from "../../services/loginService";

class Checking extends Component {
    state = {
        guestID: localStorage.getItem('id'),
        roomID: '',
        rooms: [],
        findType: "Double",
        selected: "",
        extraName: "",
        extraAge: ""


    }


    componentDidMount() {
        apiClient
            .roomsAll().then((rooms) => {
                this.setState({
                    rooms: rooms.data,
                })

            })


    }



    getType = () => {


        this.state.findType === "Double" ? this.setState({ findType: "Single" }) : this.setState({
            findType: "Double"
        })
    }

    getRoom = () => {
        let { findType } = this.state

        const { rooms } = this.state

        let showRoom = rooms.filter(query => query.roomType === findType && query.state === "Empty")

        let randomRoom = showRoom[Math.floor(Math.random() * showRoom.length)];

        console.log(randomRoom)
        if (randomRoom) {

            this.setState({
                selected: randomRoom,
                roomID: randomRoom._id
            })
        }

    }

    saved = () => {

        let obj = localStorage.getItem('room01')

        JSON.parse(obj)
        if (JSON.parse(obj).state === "Empty") {

            this.setState({
                selected: JSON.parse(obj),
                roomID: JSON.parse(obj)._id
            })
        }

    }
    handleChange = (e) => {
        this.setState({

            [e.target.name]: e.target.value

        })
    }
    extraGuest = () => {
        let { findType } = this.state

        if (findType == "Double") {

            return (

                <div className="content-main-forms" >
                    <div className="content-main-forms-title">
                        Extra guest
              </div>
                    <label className="" ><b>Name</b></label>
                    <input onChange={this.handleChange} className="input-text-form" name="extraName" placeholder="Guest name" type="text" />
                    <label className="" ><b>Age</b></label>
                    <input onChange={this.handleChange} name="extraAge" className="input-text-form" placeholder="Age" type="text" />
                </div >
            )
        }

    }


    render() {
        const { guestID, roomID, extraName, extraAge } = this.state
        return (
            <div className="main dashboard-container" >
                <Sidebar />
                <FormGuest />
                <FindRoom saved1={this.saved} data={this.state.selected} showType={this.state.findType} type={this.getType} filter={this.getRoom} />
                <CheckingData guest={guestID} extraName={extraName} extraAge={extraAge} room={roomID} data={this.state.selected} />

                {this.extraGuest()}
            </div >
        )
    }
}

export default Checking