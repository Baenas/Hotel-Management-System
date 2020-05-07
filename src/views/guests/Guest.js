import React, { Component } from "react";
import InputText from "../../components/input/InputText";
import { Link } from "react-router-dom";

class Guest extends Component {
  render() {
    return (
      <div>
        
      
     

        <div className="panel-container">
         
        <InputText class="input-text-form"  type="text" />
         
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
