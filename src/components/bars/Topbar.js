import React, { Component } from "react";
import { Link } from "react-router-dom";

class TopBar extends Component {
    render() {
        return (
            <div>

                <div className="top-bar" >
                    <Link to="/home">
                        <span className="logo-text">
                            HOTEL MANAGEMENT <span className="white"> SYSTEM</span>
                        </span>
                    </Link>
                </div>
                {/* <div className="top-menu" >
                    <span className="logo-text">
                        <div className="box-menu">
                            <div className=" white box-menu-item">
                                <span class="iconify" data-icon="mdi:bed-empty" data-inline="false" data-width="32" data-height="32"></span>
                                Rooms
                            </div>
                            <div className=" white box-menu-item">
                                <span class="iconify" data-icon="ion:man" data-inline="false" data-width="32" data-height="32"></span>
                                Guest
                            </div>
                        </div>
                    </span>
                    <span className="top-time">
                        <span className=""> TODAY'S DATE</span>
                        <span className="white"> 04 / 10 / 2020</span>
                    </span>
                </div> */}

            </div>
        );
    }
}
export default TopBar;
