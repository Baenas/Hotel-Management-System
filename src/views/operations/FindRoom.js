import React, { Component } from 'react';
import axios from 'axios';
import CardL from "../../components/cards/CardL";
import apiClient from "../../services/loginService";
import { Redirect } from 'react-router-dom'
class FindRoom extends Component {
    state = {
        rooms: [],
        findType: "Double",
        selected: "",
        redirect: null,
    }


    componentDidMount() {
        apiClient
            .roomsAll().then((rooms) => {
                this.setState({
                    rooms: rooms.data,
                })

            })
    }


    roomsList = () => {
        const { rooms } = this.state
        let { findType } = this.state

        rooms.filter(query => query.roomType === findType).map(function (elem, index) {
            // return  elem.launches+10;
            return (
                <div className="green" key={index}>
                    <div className="container-forms ">
                        {elem.roomName}
                        {elem._id}

                    </div>
                </div>
            )
        })
    }
    byType = () => {



        this.state.findType === "Double" ? this.setState({ findType: "Single" }) : this.setState({
            findType: "Double"
        })


    }
    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }

        return (
            <div className="container-forms " >
                <CardL title="Rooms" />
                <button onClick={this.byType} className="card-container-S">{this.state.findType}</button>
                <div>
                    {this.roomsList}
                </div>
            </div>
        )
    }


}

export default FindRoom