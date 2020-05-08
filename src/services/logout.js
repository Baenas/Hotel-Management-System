import React, { Component } from "react";
import cookie from 'react-cookies'

class Logout extends Component {
    handleClick() {


        cookie.remove('currentUser', { path: '/' })


    }
    render() {
        return (
            <a onClick={this.handleClick} className="sidenav-list-item" href="/">
                <span className="iconify" data-icon="mdi:door-open" data-inline="false"></span>
                <span className="icon-text">Logout</span>
            </a>
        )
    }
}

export default Logout
