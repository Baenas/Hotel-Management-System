import React, { Component } from "react";
import CardL from "../components/cards/CardL";
import Sidebar from "../components/Sidebar";
import apiClient from "../services/loginService";
class RoomId extends Component {

  state = {
    room: {},
    user: "",
    checkin: {
      name: "",
      age: "",
    },


  }

  componentDidMount() {
    let id = this.props.match.params.id;
    apiClient.oneRoom(id).then((room) => {
      this.setState({
        room: room.data,
        user: room.data.guestID
      }).then(() => {


      })
    }).catch(() => {

    })

    if (localStorage.getItem('idoperations')) {
      apiClient.getChecking(localStorage.getItem('idoperations')).then((chekingData) => {
        this.setState({
          checkin: {
            name: chekingData.data.extraguest[0].name,
            age: chekingData.data.extraguest[0].age,
          }
        })
      })
    }

  }


  handeToChecking = () => {
    const { room } = this.state

    let data = room
    JSON.stringify(data)

    localStorage.setItem('room01', JSON.stringify(data))
    console.log('Item: ' + JSON.stringify(data));


  }

  displayguest() {
    const { user, checkin } = this.state
    if (user) {
      return (
        <div className="content-main">
          <div className="content-main-forms">


            <div className="content-main-forms-title">
              Guest Info
          </div>
            <label className="" ><b>Full Name</b></label>
            <input className="input-text-form" defaultValue={user.guestFullName} placeholder="Guest ID" type="text" />
            <label className="" ><a href={"/guest/" + user._id}>Visit Guest</a></label>

          </div>



          <div className="content-main-forms">
            <div className="content-main-forms-title">
              Extra guest
          </div>
            <label className="" ><b>Name</b></label>
            <input className="input-text-form" disabled placeholder="Guest name" defaultValue={checkin.name} type="text" />
            <label className="" ><b>Age</b></label>
            <input className="input-text-form" disabled placeholder="Age" type="text" defaultValue={checkin.age} />

          </div>
        </div >
      )
    }
  }

  render() {
    const { room } = this.state
    return (
      <div className="main dashboard-container">
        <Sidebar />
        {this.displayguest()}
        <div className="content-main-forms">

          <div className="content-main-forms-title">
            ROOM
          </div>
          <label className="" ><b>Number</b></label>
          <input className="input-text-form" disabled placeholder="Room Number" type="text" defaultValue={room.roomName} />
          <label className="" ><b>Type</b></label>
          <input className="input-text-form" disabled placeholder="Room Type" type="text" defaultValue={room.roomType} />
          <label className="" ><b>Floor</b></label>
          <input className="input-text-form" disabled placeholder="Room Floor" type="text" defaultValue={room.roomFloor} />
          <label className="" ><b>Wifi</b></label>
          <input className="input-text-form" disabled placeholder="Room Wifi" type="text" defaultValue={room.roomWifi} />
          <label className="" ><b>Phone</b></label>
          <input className="input-text-form" disabled placeholder="Room Phone" type="text" defaultValue={room.roomPhone} />
          {this.state.room.state === "Empty" ? <button onClick={this.handeToChecking} className="button-fix"> SET TO Checking</button> : <div></div>}
        </div>



        <div className="dashboard-container">




        </div>
      </div>



    );
  }
}

export default RoomId;
