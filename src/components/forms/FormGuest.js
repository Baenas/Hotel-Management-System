import React, { Component } from 'react'
import CardL from "../../components/cards/CardL";
import axios from "axios";
import apiClient from '../../services/loginService';

class FormGuest extends Component {

    state = {
        guest: [],
        guestName: "",
        guestFullName: "",
        guestIdCard: "",
        guestAge: "",
        guestEmail: "",
        guestPhone: "",
        guestCountry: "",
        guestCity: "",
        id: ""

    }
    componentDidMount() {
        const id = localStorage.getItem('id')
        apiClient.oneGuest(id).then((room) => {
            this.setState({
                guest: room.data,
                guestName: room.data.guestName,
                guestFullName: room.data.guestFullName,
                guestIdCard: room.data.guestIdCard,
                guestAge: room.data.guestAge,
                guestEmail: room.data.guestEmail,
                guestPhone: room.data.guestPhone,
                guestCountry: room.data.guestCountry,
                guestCity: room.data.guestCity,
                id: room.data._id

            })

            console.log(this.state.room)

        })
    }

    render() {
        const { guest } = this.state
        return (
            <div className="container-forms ">
                <CardL title="Guest Info" />

                <label className="" ><b>Name</b></label>

                <input onChange={this.handleChange} className="input-text-form" name="guestName" defaultValue={guest.guestName} placeholder="Guest name" type="text" />
                <label className="" ><b>Full Name</b></label>
                <input onChange={this.handleChange} className="input-text-form" name="guestFullName" defaultValue={guest.guestFullName} placeholder="Guest Full name" type="text" />
                <label className="" ><b>ID card</b></label>
                <input onChange={this.handleChange} className="input-text-form" name="guestIdCard" defaultValue={guest.guestIdCard} placeholder="Guest Id card" type="text" />
                <label className="" ><b>Guest Age</b></label>
                <input onChange={this.handleChange} className="input-text-form" name="guestAge" defaultValue={guest.guestAge} placeholder="Guest Age" type="text" />
                <label className="" ><b>Guest Email</b></label>
                <input onChange={this.handleChange} className="input-text-form" name="guestEmail" defaultValue={guest.guestEmail} placeholder="Guest Email" type="text" />

                <label className="" ><b>Guest Phone</b></label>
                <input onChange={this.handleChange} className="input-text-form" name="guestPhone" defaultValue={guest.guestPhone} placeholder="Guest Phone" type="text" />
                <label className="" ><b>Guest Country</b></label>
                <input onChange={this.handleChange} className="input-text-form" name="guestCountry" defaultValue={guest.guestCountry} placeholder="Guest Country" type="text" />
                <label className="" ><b>Guest City</b></label>
                <input onChange={this.handleChange} className="input-text-form" name="guestCity" defaultValue={guest.guestCity} placeholder="Guest City" type="text" />

                <input value="Update" type="submit" />
                {this.state.alert}

            </div>

        )
    }

}

export default FormGuest