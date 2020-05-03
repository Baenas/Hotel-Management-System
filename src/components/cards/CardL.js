import React, { Component } from "react";

class CardL extends Component {
  render() {
    return (
      <div className="card-container-L">
        <div className="card-container-title">{this.props.title}</div>
        <table>
          <tr>
            <th>Empty</th>
         
          </tr>
         
        
        </table>
      </div>
    );
  }
}

export default CardL;
