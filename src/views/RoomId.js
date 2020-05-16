import React, { Component } from "react";
import CardL from "../components/cards/CardL";
import Sidebar from "../components/Sidebar";
import apiClient from "../services/loginService";
class RoomId extends Component {

  state = {
    room: {},
    user: "",
    checking: {}

  }

  componentDidMount() {
    let id = this.props.match.params.id;
    apiClient.oneRoom(id).then((room) => {
      this.setState({
        room: room.data,
        user: room.data.guestID
      })
    }).catch(() => {

    })

  }


  handeToChecking = () => {
    const { room } = this.state

    let data = room
    JSON.stringify(data)

    localStorage.setItem('room01', JSON.stringify(data))
    console.log('Item: ' + JSON.stringify(data));


  }

  displayguest() {
    const { user } = this.state
    if (user) {
      return (
        <div>

          <CardL title="Guest Info" />
          <input className="input-text-form" defaultValue={user.guestName} placeholder="Guest ID" type="text" />

          <input className="input-text-form" defaultValue={user.guestFullName} placeholder="Guest Full name" type="text" />
        </div>

      )
    }
  }

  render() {
    const { room } = this.state

    return (
      <div className="main dashboard-container">
        <Sidebar />

        <div className="container-forms">
          {this.displayguest()}

          <CardL title="Room Info" />
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
        <div className="container-forms">
          <CardL title="Extra Guest" />
          <input className="input-text-form" placeholder="Name" type="text" />
          <input className="input-text-form" placeholder="Name" type="text" />
          <input className="input-text-form" placeholder="Name" type="text" />
          <input className="input-text-form" placeholder="Name" type="text" />


        </div>
        <div className="container-forms">
          <CardL title="Remain breakfast" />

          <input className="input-text-form" placeholder="0" type="text" />
          <CardL title="Latest Breakfast" />

          <input className="input-text-form" placeholder="7/05/2020" type="text" />
          <input className="input-text-form" placeholder="6/05/2020" type="text" />
          <input className="input-text-form" placeholder="5/05/2020" type="text" />


        </div>
        <div className="container-forms">
          <CardL title="Days Left" />



        </div>
      </div >
    );
  }
}

export default RoomId;
