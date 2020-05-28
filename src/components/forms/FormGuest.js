import React, { Component } from 'react'

import apiClient from '../../services/loginService';

class FormGuest extends Component {

    state = {
        guest: [],
        id: '',
        byroom: '',
        byname: '',
        byidcard: '',


    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value

        })



    }
    componentDidMount() {

        apiClient
            .guestAll()
            .then((guest) => {
                this.setState({
                    guest: guest.data,
                })
            })
    }

    // active = () => {
    //     const { byname, byidcard, guest } = this.state
    //     let active = guest.filter(propery => propery.guestIdCard.toLowerCase().indexOf(byidcard.toLowerCase()) > -1 && propery.guestFullName.toLowerCase().indexOf(byname.toLowerCase()) > -1)
    //         .slice(0, 8).map(function (elem, index) {
    //             return (
    //                 <div key={index} >
    //                     <div className="guest-list">{elem.guestFullName}- {elem.guestIdCard} </div>

    //                 </div >
    //             )
    //         })
    //     return active
    // }
    render() {
        const { byname, guest, byidcard } = this.state

        let active = guest.filter(propery => propery.guestIdCard.toLowerCase().indexOf(byidcard.toLowerCase()) > -1 && propery.guestFullName.toLowerCase().indexOf(byname.toLowerCase()) > -1)
            .slice(0, 8).map(function (elem, index) {
                return (
                    <div key={index} >
                        <div onClick={() => localStorage.setItem('guest', JSON.stringify(elem))} className="guest-list">{elem.guestFullName}- {elem.guestIdCard} </div>

                    </div >
                )
            })
        return (




            <div className="form-main">

                <div className="form-title">
                    <div className="form-title-item">
                        Get Guest
                        </div>
                </div>

                <div className="form-body">
                    <div className="form-body-item">

                        <div className="form-body-data">
                            <input onChange={this.handleChange} className="input-text-form" name="byname" placeholder="Guest name" type="text" />
                            <input onChange={this.handleChange} className="input-text-form" name="byidcard" placeholder="Guest id card" type="text" />

                        </div>
                    </div>

                    {active}
                </div>

            </div>



        )
    }

}

export default FormGuest