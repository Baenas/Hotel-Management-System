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

        <div className="panel-container">
          <span className="panel-container-title"> Welcome to HMS System</span>
          <div className=" content-cards">
            <CardL
              title={"Rooms Information "}
              content={
                <div className="content-cards">
                  <CardS title="Free" content={10} />
                </div>
              }
            />
            <CardL
              title={"Guest"}
              content={
                <div className="content-cards">
                  <CardM title="Month  Checkings" content={3} />
                  <CardM title="Month Checkouts" content={2} />
                </div>
              }
            />
          </div>
        </div>
        <MiddleBar />
        <div className="button-container">
          <AppButton style={"button-apps"} path="/rooms" text="Rooms" />

          <AppButton style={"button-apps"} path="/guest" text="Guests" />
        </div>
      </div>
    );
  }
}

export default Main;
