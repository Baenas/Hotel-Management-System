import React, { Component } from "react";
import CardL from "../components/cards/CardL";
import Sidebar from "../components/Sidebar";
import MainCards from "../components/cards/MainCards";

class Main extends Component {
  render() {
    return (
      <div>
        <Sidebar />
        <div className="main">
          {/*Cargo botones habicatciones */}
          <CardL title="First Floor" />
          <div className="button-container">
            <MainCards link="/rooms/1" title="001" size="64"  img="ic-baseline-do-not-disturb-alt" bot="Not Available" />
        
 
                      
          </div>
          <CardL title="Second  Floor" />
          <div className="button-container">
          
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
