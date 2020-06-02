import React, { Component } from "react";
import Modal from 'react-modal';
import TopBar from '../../components/bars/Topbar'
import SideBar from '../../components/bars/Sidebar'


import { Link } from "react-router-dom";
import apiClient from "../../services/loginService";
class Rooms extends Component {

  state = {

  }
  constructor() {
    super();
    this.state = {
      rooms: [],
      floor: [],
      showModal: false,
    };


  }

  handleOpenModal = () => {
    this.setState({ showModal: true });
  }

  handleCloseModal = () => {
    this.setState({ showModal: false });
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

    const Floor1 = rooms.filter(room => room.roomFloor === "01").map(function (elem, index) {
      // return  elem.launches+10;


      console.log(elem)
      return (
        <div key={index}>
          {/* <Link to={"/roms/" + elem._id}> */}
          <div className={elem.state === "Empty" ? "room-card free" : "room-card "}>
            <div className="room-card-top" >
              <div className="room-card-name" > Room  {elem.roomName} </div>
              <div className="room-card-state" > {elem.state} </div>

            </div>
            <div className="room-card-top" >
              <div className="room-card-guest" > {elem.guestID != null ? elem.guestID.guestFullName : "Room Available"}  </div>
            </div>
            <div className="room-card-top" >
              <div className="room-card-name" >  {elem.roomPrice + "€"} </div>
              <div className="room-card-state" > {elem.roomType} </div>

            </div>
          </div>
          {/* </Link> */}
        </div >
      );
    }); const Floor2 = rooms.filter(room => room.roomFloor === "02").map(function (elem, index) {
      // return  elem.launches+10;


      return (
        < div key={index} >
          <Link to={"/rooms/" + elem._id}>
            {/* <MainCards color={estado} title={elem.roomName} size="64" img="cil:bed" bot="Check for rooms" /> */}
          </Link>
        </div >
      );
    });
    return (

      <div >
        <TopBar />



        <div className="">
          {/* <CardL title="Rooms settings" />

          <Link to="/rooms/add">
            <CardM title={"Manage rooms"} />
          </Link> */}
          {/*Cargo botones habicatciones */}
          <div className="top-time">
            Floor 01
          </div>
          <div className="room-floor-container" >
            {Floor1}
          </div>
          <div className="room-floor-container" >
            {Floor2}
          </div>
          <Modal
            ariaHideApp={false}
            isOpen={this.state.showModal}
            contentLabel="Minimal Modal Example"
          >
            <button onClick={this.handleCloseModal}>Close Modal</button>
          </Modal>

        </div>
      </div >
    );
  }
}

export default Rooms;
