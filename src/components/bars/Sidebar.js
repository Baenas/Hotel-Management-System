import React, { Component } from "react";
import Logout from '../../services/logout'
import './top-side-bars.css'
class Sidebar extends Component {
  render() {
    return (
      <div>
        <div className="sidenav">
          <a className="sidenav-list-item" href="/">
            <span className="iconify" data-icon="ant-design:dashboard-twotone" data-inline="true"></span>
            <span className="icon-text">Dashboard</span>
          </a>
          <a className="sidenav-list-item" href="/rooms">
            <span className="iconify" data-icon="icomoon-free:files-empty" data-inline="false"></span>
            <span className="icon-text">Rooms</span>
          </a>
          <a className="sidenav-list-item" href="/guest">
            <span className="iconify" data-icon="ion-man-outline" data-inline="false"></span>
            <span className="icon-text">Guest</span>
          </a>
          <a className="sidenav-list-item" href="/roomoperations">
            <span className="iconify" data-icon="ion-bed" data-inline="false"></span>
            <span className="icon-text">Operations</span>
          </a>

          <a className="sidenav-list-item" href="/cal">
            <span className="iconify" data-icon="ion-clock" data-inline="false"></span>
            <span className="icon-text">Calendars</span>
          </a>
          <Logout />
        </div>
      </div>
    );
  }
}
export default Sidebar;
