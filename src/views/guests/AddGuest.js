import React, { Component } from 'react'

import { Redirect } from 'react-router-dom'
import { withRouter } from 'react-router-dom';
import apiClient from "../../services/loginService";
class AddGuest extends Component {

    state = {

        guestName: "",
        guestFullName: "",
        guestIdCard: "",
        guestAge: "",
        guestEmail: "",
        guestPhone: "",
        guestCountry: "",
        guestCity: "",
        alert: "",
        redirect: null,

    }
    handleSubmit = (e) => {
        e.preventDefault();

        const { guestName, guestFullName, guestIdCard, guestAge, guestEmail, guestPhone, guestCountry, guestCity } = this.state

        apiClient.oneMoreGuest({ guestName, guestFullName, guestIdCard, guestAge, guestEmail, guestPhone, guestCountry, guestCity })
            .then(() => {
                this.setState({ redirect: "/home" })
            }).catch(() => {
                this.setState({
                    alert: "Empty field"
                })

            })







    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,

        })
    }
    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-main">
                        <div className="form-title">
                            <div className="form-title-item">
                                Add Guest
                        </div>  </div>
                        <div className="form-body">
                            <div className="form-body-item">
                                <div className="form-body-data">
                                    Guest name
                            </div>
                                <div className="form-body-data">
                                    <input onChange={this.handleChange} className="input-text-form" name="guestName" placeholder="Guest name" type="text" />
                                </div>
                            </div>

                            <div className="form-body-item">
                                <div className="form-body-data">
                                    Guest Full Name
                            </div>
                                <div className="form-body-data">
                                    <input onChange={this.handleChange} className="input-text-form" name="guestFullName" placeholder="Guest Full name" type="text" />

                                </div>
                            </div>

                            <div className="form-body-item">
                                <div className="form-body-data">
                                    Guest ID card
                            </div>
                                <div className="form-body-data">
                                    <input onChange={this.handleChange} className="input-text-form" name="guestIdCard" placeholder="Guest Id card" type="text" />

                                </div>
                            </div>
                            <div className="form-body-item">
                                <div className="form-body-data">
                                    Guest Age
                            </div>
                                <div className="form-body-data">
                                    <input onChange={this.handleChange} className="input-text-form" name="guestAge" placeholder="Guest Age" type="number" />


                                </div>
                            </div>


                            <div className="form-body-item">
                                <div className="form-body-data">
                                    Guest Email
                            </div>
                                <div className="form-body-data">
                                    <input onChange={this.handleChange} className="input-text-form" name="guestEmail" placeholder="Guest Email" type="text" />


                                </div>
                            </div>
                            <div className="form-body-item">
                                <div className="form-body-data">
                                    Guest Phone
                            </div>
                                <div className="form-body-data">
                                    <input onChange={this.handleChange} className="input-text-form" name="guestPhone" placeholder="Guest Phone" type="text" />


                                </div>
                            </div>

                            <div className="form-body-item">
                                <div className="form-body-data">
                                    Guest country
                            </div>
                                <div className="form-body-data">
                                    <input onChange={this.handleChange} className="input-text-form" name="guestCountry" placeholder="Guest Country" type="text" />
                                </div>
                            </div>

                            <div className="form-body-item">
                                <div className="form-body-data">
                                    Guest City
                            </div>
                                <div className="form-body-data">
                                    <input onChange={this.handleChange} className="input-text-form" name="guestCity" placeholder="Guest City" type="text" />

                                </div>
                            </div>


                        </div>
                        <div className="form-title">
                            <div className="form-title-item">
                                <button type="submit" className="button-submit" >
                                    Add
                            </button>
                                {this.state.alert}
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
export default withRouter(AddGuest)