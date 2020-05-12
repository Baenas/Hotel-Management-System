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
            .map(function (elem, index) {
                // return  elem.launches+10;
                return (
                    < tr key={index} >
                        <td className="input-text-form">

                            <Link to={{
                                pathname: "/guest/" + elem._id,
                                state: {
                                    id: elem._id
                                }
                            }}>
                                {elem.guestFullName}
                                < br />
                                {elem.guestIdCard} - {elem.guestCountry}

                            </Link>


                        </td>
                    </tr>
                );
            });

        return (
            <div className="" >

                <Sidebar />

                <div className="container-forms overflow">
                    <CardL title="Find  Guest" />

                    <table>
                        <thead>

                            <tr>
                                <td className="input-text-form"><b> <input className="input-list-form" name="val" onChange={this.handleSearch} type="text" /></b></td>
                            </tr>

                        </thead>
                        <tbody>


                            {Guest}

                        </tbody>
                    </table>
                </div>


            </div>
        );
    }
}

export default guestFind