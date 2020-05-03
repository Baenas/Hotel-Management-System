import React, { Component } from "react";
import MainBar from "../components/MainBar";
import Card1 from '../components/cards/Card1'
class Main extends Component {
  render() {
    return (
      <div>
        <MainBar />

        <div className="panel-container">

           <span className="panel-container-title"> Welcome to HMS System</span>

        <Card1/>
        </div>
    

      </div>
    );
  }
}

export default Main;
