import React, { Component } from "react";
import MainBar from "../../components/MainBar";
import AppButton from "../../components/buttons/AppButton";
import InputText from "../../components/input/InputText";
import CardL from "../../components/cards/CardL";

class GuestId extends Component {
    render(){
        return(<div>
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
          <InputText
          class="input-text-form"
          placeholder="Guest Phone"
          value=""
          type="text"
        />
           <InputText
          class="input-text-form"
          placeholder="Guest Country"
          value=""
          type="text"
        />
          <InputText
          class="input-text-form"
          placeholder="Guest Full Email"
          value=""
          type="text"
        />
          <InputText
          class="input-text-form"
          placeholder="Guest City "
          value=""
          type="text"
        />
          <InputText
          class="input-text-form"
          placeholder="Passport or CardID"
          value=""
          type="text"
        />
        </div>)
    }
}


export default GuestId;