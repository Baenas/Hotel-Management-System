import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import CardL from "../../components/cards/CardL";
import apiClient from "../../services/loginService";
class guestFind extends Component {
    state = {
        find: [],
        val: ' '
    }
    componentDidMount() {

        apiClient
            .guestAll()
            .then((guest) => {
                this.setState({
                    find: guest.data,
                })
            })
    }
    handleSearch = (e) => {
        this.setState({
            val: e.target.value,

        })

    }
    render() {
        const { find, val } = this.state
        const Guest = find.filter(function (guest) {
            return guest.guestFullName.toLowerCase().indexOf(val.toLowerCase()) > -1
        })
            .slice(0, 5).map(function (elem, index) {
                // return  elem.launches+10;
                return (



                    <div key={index} >
                        <Link to={{
                            pathname: "/guest/" + elem._id,
                            state: {
                                id: elem._id
                            }
                        }}>
                            <div className="form-data-name">
                                Name:   <span className="form-data-name-small">{elem.guestFullName}</span>
                            </div>
                            <div className="form-data-id">
                                IdCard:   <span className="form-data-name-small">{elem.guestIdCard}</span>
                            </div>
                        </Link>
                    </div>


                );
            });

        return (
            <div className="" >

                <Sidebar />



                <div className="content-col">
                    <div className="content-main-forms">
                        <div className="content-main-forms-title">
                            Guest Finder
                      </div>
                        <div className="content-main-forms-search">
                            <input placeholder="Search..." name="val" onChange={this.handleSearch} type="text"></input>
                            <span className="iconify span-icon-search" data-icon="mdi:account-search-outline" data-inline="false" data-width="24" data-height="24"></span>
                        </div>
                    </div>


                    <div className="content-main-forms-data">
                        {Guest}


                    </div>
                </div>

            </div>
        );
    }
}

export default guestFind