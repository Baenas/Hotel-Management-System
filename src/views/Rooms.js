import React, { Component } from "react";

import CardL from "../components/cards/CardL";
import Sidebar from "../components/Sidebar";

import AppButton from "../components/buttons/AppButton";

class Main extends Component {
  render() {
    return (
      <div>
       <Sidebar />
   <div className="main">
        {/*Cargo botones habicatciones */}
        <CardL title="First Floor" />
        <div className="button-container">
          <AppButton
            style={"button-apps button-red"}
            path="/rooms/1"
            text="1"
          />
          <AppButton style={"button-apps button-green"} path="/" text="2" />
          <AppButton style={"button-apps button-red"} path="/" text="3" />
          <AppButton style={"button-apps button-green"} path="/" text="4" />
          <AppButton style={"button-apps button-red"} path="/" text="5" />
          <AppButton style={"button-apps button-red"} path="/" text="6" />
          
        </div>
        <CardL title="Second  Floor" />
        <div className="button-container">
          <AppButton style={"button-apps button-red"} path="/" text="1" />
          <AppButton style={"button-apps button-red"} path="/" text="2" />
          <AppButton style={"button-apps button-red"} path="/" text="3" />
          <AppButton style={"button-apps button-green"} path="/" text="4" />
          <AppButton style={"button-apps button-red"} path="/" text="5" />
          <AppButton style={"button-apps button-green"} path="/" text="6" />
        </div>
      </div>
      </div>
    );
  }
}

export default Main;
