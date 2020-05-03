import React, { Component } from "react";

class Card1 extends Component {
  render() {
    return (
      <div className="card-container">
        <div className="card-container-title">Rooms available</div>
        <table>
          <tr>
            <th>Empty</th>
            <th>Ocuped</th>
            <th>Out of service</th>
          </tr>
          <tr>
            <td>Jill</td>
            <td>Smith</td>
            <td>50</td>
          </tr>
          <tr>
            <td>D</td>
            <td>Jackson</td>
            <td>94</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Card1;
