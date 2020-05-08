import React, { Component } from "react";
import CardL from "../components/cards/CardL";
import CardM from "../components/cards/CardM";
import { Link } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import MainCards from "../components/cards/MainCards";
import axios from "axios";

class Rooms extends Component {

  state = {
    rooms: [],
    floor: []
  }

  componentDidMount() {
    axios.get("http://localhost:3000/rooms").then((rooms) => {
      this.setState({
        rooms: rooms.data,
      })

    })

  }


  render() {
    const { rooms } = this.state
    const Floor1 = rooms.map(function (elem, index) {
      // return  elem.launches+10;
      return (
        <div key={index}>
          <Link to={"/rooms/" + elem._id}>
            <MainCards title={elem.roomName} size="64" img="cil:bed" bot="Check for rooms" />

          </Link>
        </div>

      );
    });
    return (

      < div >

        <Sidebar />
        <div className="main">
          <CardL title="Rooms settings" />

          <Link to="/rooms/add">
            <CardM title={"Add room"} />
          </Link>
          {/*Cargo botones habicatciones */}
          <CardL title="First Floor" />
          <div className="button-container">


            {Floor1}

          </div>
          <CardL title="Second  Floor" />
          <div className="button-container">

          </div>
        </div>
      </div >
    );
  }
}

export default Rooms;
