import React, { Component } from "react";

class CardS extends Component {
  render() {
    return (
      <div className="card-container-S">
        <div className="card-container-title">{this.props.title}</div>
        <table>
       
        
          <tr>
            <td className="card-container-content" >{this.props.content}</td>
          
          </tr>
        
        </table>
      </div>
    );
  }
}

export default CardS;
