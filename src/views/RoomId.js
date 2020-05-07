import React, { Component } from "react";
import CardL from "../components/cards/CardL";
import Sidebar from "../components/Sidebar";

import InputText from "../components/input/InputText";
class RoomId extends Component {
  render() {
    return (
      <div className="main dashboard-container ">
        <Sidebar />
        <div className="container-forms">
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
        <div className="container-forms">
          <CardL title="Extra Guest" />
          <InputText
            class="input-text-form"
            placeholder="Name"
            value=""
            type="text"
          />
          <InputText
            class="input-text-form"
            placeholder="Name"
            value=""
            type="text"
          />
          <InputText
            class="input-text-form"
            placeholder="Name"
            value=""
            type="text"
          />
        </div>
        <div className="container-forms">
          <CardL title="Remain breakfast" />
          <InputText
            class="input-text-form"
            placeholder="3"
            value=""
            type="number"
          />
          <CardL title="Last Breakfast" />
          <InputText
            class="input-text-form"
            placeholder="07/05/2020"
            value=""
            type="sting"
          />
             <InputText
            class="input-text-form"
            placeholder="06/05/2020"
            value=""
            type="sting"
          />
             <InputText
            class="input-text-form"
            placeholder="05/05/2020"
            value=""
            type="sting"
          />
             <InputText
            class="input-text-form"
            placeholder="04/05/2020"
            value=""
            type="sting"
          />
             <InputText
            class="input-text-form"
            placeholder="03/05/2020"
            value=""
            type="sting"
          />
           <InputText
            class="input-text-form"
            placeholder="02/05/2020"
            value=""
            type="sting"
          />
           <InputText
            class="input-text-form"
            placeholder="01/05/2020"
            value=""
            type="sting"
          />
          
        </div>
          <div className="container-forms">
          <CardL title="Days Left" />
          <InputText
            class="input-text-form"
            placeholder="1"
            value=""
            type="number"
          />  <CardL title="Total days" />
          <InputText
            class="input-text-form"
            placeholder="8"
            value=""
            type="number"
          />
          
          
        </div>
      </div>
    );
  }
}

export default RoomId;
