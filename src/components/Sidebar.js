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
           <a className="sidenav-list-item"  href="/">
          <span className="iconify" data-icon="icomoon-free:files-empty" data-inline="false"></span>
           <span className="icon-text">Rooms</span> 
          </a>
          
       
        </div>
      </div>
    );
  }
}
export default Sidebar;
