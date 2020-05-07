import React, { Component } from "react";
import CardL from "../components/cards/CardL";
import Sidebar from "../components/Sidebar";

import AppButton from "../components/buttons/AppButton";

import InputText from "../components/input/InputText";
class RoomId extends Component {
  render() {
    return (
      <div className="main" >
          <Sidebar />
      
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
