import React, { Component } from "react";

class Sidebar extends Component {
  render() {
    return (
      <div>
        <div className="  sidenav">
          <a className="sidenav-list-item"  href="/">
            <span className="iconify" data-icon="ant-design:dashboard-twotone" data-inline="true"></span>
           <span className="icon-text">Dashboard</span> 
          </a>
           <a className="sidenav-list-item"  href="/rooms">
          <span className="iconify" data-icon="icomoon-free:files-empty" data-inline="false"></span>
           <span className="icon-text">Rooms</span> 
             
          </a>
             <a className="sidenav-list-item"  href="/guest">
          <span className="iconify" data-icon="ion-man-outline" data-inline="false"></span>
           <span className="icon-text">Guest</span> 
             
          </a>
       
        </div>
      </div>
    );
  }
}
export default Sidebar;
