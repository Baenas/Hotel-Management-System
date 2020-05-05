import React, { Component } from "react";

class CardS extends Component {
  render() {
    return (
      <div className="card-container-S">
        <div className="card-container-title">{this.props.title}</div>
        <table>
          <tbody>
          <tr>
            <td className="card-container-content">{this.props.content}</td>
          </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default CardS;
