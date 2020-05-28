import React, { Component } from "react";
import TopBar from '../components/bars/Topbar'
import RoomStatus from '../views/operations/ManageRoomState'

import { Link } from 'react-router-dom'
class Main extends Component {

  state = {
    app: '',
    location: "Landing"
  }

  render() {
    return (

      <div>

        <TopBar />



        <div className="main-side">

          <div className="side-main-left">
            <div className="app-box">
              <ul className="acorh ">
                <div className="app-box-item">
                  <span className="iconify" data-icon="mdi:house" data-inline="true" data-width="32" data-height="32"></span>
                  <span >Main</span>
                </div>
                <li> <div className="app-box-item">
                  <span className="iconify" data-icon="mdi:bed-empty" data-inline="true" data-width="32" data-height="32"></span>
                  <span className="app-box-title">Rooms </span>
                </div>
                  <ul>
                    <Link to="/rooms"> <li className="app-box-item-sub"><span>Room Map</span></li></Link>
                    <Link to="/rooms/add">   <li className="app-box-item-sub"><span>Room Management</span></li></Link>

                  </ul>
                </li>
                <li> <div className="app-box-item">
                  <span className="iconify" data-icon="mdi:man" data-inline="true" data-width="32" data-height="32"></span>
                  <span className="app-box-title">Guest </span>
                </div>
                  <ul>
                    <Link to="/guest"><li className="app-box-item-sub"><span>Add Guest</span></li></Link>

                  </ul>
                </li>
                <li> <div className="app-box-item">
                  <span className="iconify" data-icon="mdi:clock" data-inline="true" data-width="32" data-height="32"></span>
                  <span className="app-box-title">Basic Operations </span>
                </div>
                  <ul>
                    <Link to="/checking">    <li className="app-box-item-sub"><span>Check in</span></li></Link>

                  </ul>
                </li>
                {/* <li> <div className="app-box-item">
                  <span className="iconify" data-icon="mdi:clock" data-inline="true" data-width="32" data-height="32"></span>
                  <span className="app-box-title">Operations </span>
                </div>
                  <ul>
                    x<Link to="/manageroom">       <li className="app-box-item-sub"><span>Operations</span></li></Link>

                  </ul>
                </li> */}
              </ul>
            </div>

          </div>
          <div className="side-main">
            <div className="title-info">
            </div>

            <RoomStatus />
          </div>


        </div >
      </div >
    );
  }
}

export default Main;
