import React, { Component } from "react";
import CardL from "../components/cards/CardL";
import CardM from "../components/cards/CardM";
import { Link } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import MainCards from "../components/cards/MainCards";
import axios from "axios";
import apiClient from "../services/loginService";
class Rooms extends Component {

  state = {
    rooms: [],
    floor: []
  }

  componentDidMount() {
    apiClient
      .roomsAll().then((rooms) => {
        this.setState({
          rooms: rooms.data,
        })

      })

  }


  render() {
    const { rooms } = this.state
    let estado = "no"
    const Floor1 = rooms.filter(room => room.roomFloor === "Floor 01").map(function (elem, index) {
      // return  elem.launches+10;
      if (elem.state === "Empty") {
        estado = "verde"
      }
      return (
        <div key={index}>
          <Link to={"/rooms/" + elem._id}>
            <MainCards color={estado} title={elem.roomName} size="64" img="cil:bed" bot="Check for rooms" />
          </Link>
        </div>
      );
    }); const Floor2 = rooms.filter(room => room.roomFloor === "Floor 02").map(function (elem, index) {
      // return  elem.launches+10;

      if (elem.state === "Empty") {
        estado = "verde"
      }
      return (
        < div key={index} >
          <Link to={"/rooms/" + elem._id}>
            <MainCards color={estado} title={elem.roomName} size="64" img="cil:bed" bot="Check for rooms" />
          </Link>
        </div >
      );
    });
    return (

      <div >

        <Sidebar />
        <div className="main">
          <CardL title="Rooms settings" />

          <Link to="/rooms/add">
            <CardM title={"Manage rooms"} />
          </Link>
          {/*Cargo botones habicatciones */}
          <CardL title="First Floor" />
          <div className="button-container">


            {Floor1}

          </div>
          <CardL title="Second  Floor" />
          <div className="button-container">
            {Floor2}

          </div>
        </div>
      </div >
    );
  }
}

export default Rooms;
