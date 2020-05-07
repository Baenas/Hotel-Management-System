import React, { Component } from "react";
import MainBar from "../components/MainBar";
import Sidebar from "../components/Sidebar";
import Rooms from "../views/Rooms";
import MainCards from "../components/cards/MainCards";
class Main extends Component {
  render() {
    return (
      <div>
        <Sidebar />
        <div className="main ">
          <div className="dashboard-container">
          <MainCards link="/rooms" title="Rooms" size="64"  img="cil:bed" bot="Check for rooms" />
          <MainCards title="Checking" size="32" img="mdi:check-underline" bot="Do a checking" />
          <MainCards title="Checkout" size="32" img="bx-bxs-archive-out" bot="Do a checkout" />
              </div>
        </div>
      </div>
    );
  }
}

export default Main;
     