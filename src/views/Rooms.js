import React, { Component } from "react";
import MainBar from "../components/MainBar";
import MiddleBar from "../components/MiddleBar";
import CardM from "../components/cards/CardM";
import CardL from "../components/cards/CardL";
import CardS from "../components/cards/CardS";
import AppButton from "../components/buttons/AppButton";

class Main extends Component {
  render() {
    return (
      <div>
        <MainBar />
        {/*Muestro el boton de atras */}
        <div className="button-container">
          <AppButton style={"button-apps"} path="/" text="Go Back" />
        </div>
        {/*Cargo botones habicatciones */}
        <CardL title="First Floor"/>
        <div className="button-container">

      <AppButton style={"button-apps button-red"} path="/rooms/1" text="1" />
          <AppButton style={"button-apps button-green"} path="/" text="2" />
          <AppButton style={"button-apps button-red"} path="/" text="3" />
          <AppButton style={"button-apps button-green"} path="/" text="4" />
          <AppButton style={"button-apps button-red"} path="/" text="5" />
          <AppButton style={"button-apps button-red"} path="/" text="6" />
        
    
        </div>
           <CardL title="Second  Floor"/>
        <div className="button-container">

      <AppButton style={"button-apps button-red"} path="/" text="1" />
          <AppButton style={"button-apps button-red"} path="/" text="2" />
          <AppButton style={"button-apps button-red"} path="/" text="3" />
          <AppButton style={"button-apps button-green"} path="/" text="4" />
          <AppButton style={"button-apps button-red"} path="/" text="5" />
          <AppButton style={"button-apps button-green"} path="/" text="6" />
        
    
        </div>
      </div>
    );
  }
}

export default Main;
