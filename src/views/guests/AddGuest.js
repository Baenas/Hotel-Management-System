import React, { Component } from 'react'
import Sidebar from "../../components/Sidebar";
import CardL from "../../components/cards/CardL";
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
                <Sidebar />
                <form onSubmit={this.handleSubmit}>
                    <div className="container-forms">

                        <CardL title="Add Guest" />


                        <label className="" ><b>Name</b></label>
                        <input onChange={this.handleChange} className="input-text-form" name="guestName" placeholder="Guest name" type="text" />
                        <label className="" ><b>Full Name</b></label>
                        <input onChange={this.handleChange} className="input-text-form" name="guestFullName" placeholder="Guest Full name" type="text" />
                        <label className="" ><b>ID card</b></label>
                        <input onChange={this.handleChange} className="input-text-form" name="guestIdCard" placeholder="Guest Id card" type="text" />
                        <label className="" ><b>Guest Age</b></label>
                        <input onChange={this.handleChange} className="input-text-form" name="guestAge" placeholder="Guest Age" type="text" />
                        <label className="" ><b>Guest Email</b></label>
                        <input onChange={this.handleChange} className="input-text-form" name="guestEmail" placeholder="Guest Email" type="text" />

                        <label className="" ><b>Guest Phone</b></label>
                        <input onChange={this.handleChange} className="input-text-form" name="guestPhone" placeholder="Guest Phone" type="text" />
                        <label className="" ><b>Guest Country</b></label>
                        <input onChange={this.handleChange} className="input-text-form" name="guestCountry" placeholder="Guest Country" type="text" />
                        <label className="" ><b>Guest City</b></label>
                        <input onChange={this.handleChange} className="input-text-form" name="guestCity" placeholder="Guest City" type="text" />
                    </div>
                    <div className="container-forms">
                        <input value="Add" type="submit" />
                        {this.state.alert}
                    </div>
                </form>
            </div>
        )
    }
}
export default withRouter(AddGuest)