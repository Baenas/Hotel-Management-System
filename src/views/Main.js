import React, { Component } from "react";
import MainBar from "../components/MainBar";
import CardM from "../components/cards/CardM";
import CardL from "../components/cards/CardL";
import CardS from "../components/cards/CardS";

class Main extends Component {
  render() {
    return (
      <div>
        <MainBar />

        <div className="panel-container">
          <span className="panel-container-title"> Welcome to HMS System</span>
          <div className="content-cards">
       
        
            <CardS title={"Free Rooms"} content={10} />
            <CardS title={"Today Checkings "} content={3} />
            <CardS title={"Today Checkout "} content={4} />
            

          </div>
        </div>
      </div>
    );
  }
}

export default Main;
