import React, { Component } from "react";
import MainBar from "../../components/MainBar";
import AppButton from "../../components/buttons/AppButton";
import InputText from "../../components/input/InputText";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Guest extends Component {
  render() {
    return (
      <div>
        <MainBar />
        <InputText class="input-text-form" placeholder="Guest ID" type="text" />

        <div className="panel-container">
          <table>
            <tbody>
              <tr>
                <td className="input-list-form">Name</td>
                <td className="input-list-form">Room Number</td>
              </tr>
               <tr>
                <td className="card-container-content"> <Link to="/guest/1"> Daniel Baenas Gomez</Link></td>
                <td className="card-container-content">1</td>
              </tr>
                <tr>
                <td className="card-container-content">Nombre de prueba  test</td>
                <td className="card-container-content">3</td>
              </tr>
            </tbody>
          </table>

          {/*   <Link to="/guest/1"></Link> */}
        </div>
      </div>
    );
  }
}
export default Guest;
