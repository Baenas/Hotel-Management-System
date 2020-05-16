import React, { Component } from "react";
import Sidebar from "../components/Sidebar";
import MainCards from "../components/cards/MainCards";
import { Link } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <div>
        <Sidebar />
        <div className="main ">
          <div className="dashboard-container">
            <Link to="/rooms">
              <MainCards color="main-cards blue " title="Rooms" size="64" img="cil:bed" bot="Check for rooms" />
            </Link>
            <Link to="/guest">
              <MainCards color="main-cards green" title="Guest" size="64" img="cil:bed" bot="Guest panel" />
            </Link>
            <Link to="/roomoperations">
              <MainCards color="main-cards orange" title="Room Operations" size="64" img="cil:bed" bot="Room Operations" />
            </Link>
            {/*  <MainCards link="/guest"  title="Guest" size="64" img="ion-man-outline" bot="Manage guest" />
        <MainCards title="Checking" size="64" img="mdi:check-underline" bot="Do a checking" />
        <MainCards title="Checkout" size="64" img="bx-bxs-archive-out" bot="Do a checkout" /> */}



            <div className="content-col">
              <div className="content-main-forms">
                <div className="content-main-forms-title">
                  Guest Finder
                </div>
                <div className="content-main-forms-search">
                  <input placeholder="Search..." type="text"></input>
                  <span className="iconify span-icon-search" data-icon="mdi:account-search-outline" data-inline="false" data-width="24" data-height="24"></span>
                </div>
              </div>


              <div className="content-main-forms-data">
                <div className="form-data-name">
                  Name:   <span className="form-data-name-small">Daniel Baenas Gomez</span>
                </div>
                <div className="form-data-id">
                  IdCard:   <span className="form-data-name-small">3283XXXXX</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Main;
