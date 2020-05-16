import React, { Component } from "react";

class CardL extends Component {
  render() {
    return (
      <div className="card-container-L">
        <div className="card-container-title-L ">{this.props.title}</div>
        <table>
          <tbody>
            <tr>
              <td className="card-container-content-L">{this.props.content}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default CardL;
