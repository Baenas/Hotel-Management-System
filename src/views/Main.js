import React, { Component } from "react";
import Sidebar from "../components/Sidebar";
import MainCards from "../components/cards/MainCards";
class Main extends Component {
  render() {
    return (
      <div>
        <Sidebar />
        <div className="main ">
          <div className="dashboard-container">
          <MainCards link="/rooms" title="Rooms" size="64"  img="cil:bed" bot="Check for rooms" />
          {/*  <MainCards link="/guest"  title="Guest" size="64" img="ion-man-outline" bot="Manage guest" />
        <MainCards title="Checking" size="64" img="mdi:check-underline" bot="Do a checking" />
        <MainCards title="Checkout" size="64" img="bx-bxs-archive-out" bot="Do a checkout" /> */}
        

              </div>
        </div>
      </div>
    );
  }
}

export default Main;
    