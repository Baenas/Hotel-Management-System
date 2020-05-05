import React, { Component } from "react";
import CardM from "../components/cards/CardM";
import CardL from "../components/cards/CardL";
import CardS from "../components/cards/CardS";
import AppButton from "../components/buttons/AppButton";
import MainBar from "../components/MainBar";
import InputText from "../components/input/InputText";
class RoomId extends Component {
  render() {
    return (
      <div>
        <MainBar />
        <div className="button-container">
          <AppButton style={"button-apps"} path="/rooms" text="Go Back" />
        </div>
        <CardL title="Guest Info" />

        <InputText
          class="input-text-form"
          placeholder="Guest ID"
          value=""
          type="text"
        />
        <InputText
          class="input-text-form"
          placeholder="Guest Full Name"
          value=""
          type="text"
        />
          <CardL title="Room Info" />
            <InputText
          class="input-text-form"
          placeholder="Room Number"
          value=""
          type="text"
        />
        
            <InputText
          class="input-text-form"
          placeholder="Room Type"
          value=""
          type="text"
        />
           
            <InputText
          class="input-text-form"
          placeholder="Room Floor"
          value=""
          type="text"
        />
           <InputText
          class="input-text-form"
          placeholder="Room Wifi"
          value=""
          type="text"
        />
         <InputText
          class="input-text-form"
          placeholder="Room Phone"
          value=""
          type="text"
        />
      </div>
    );
  }
}

export default RoomId;
