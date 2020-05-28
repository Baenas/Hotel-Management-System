import React, { Component } from "react";
import apiClient from "../../services/loginService";


class Checkout extends Component {
    state = {
        data: this.props.data,

    }
    componentDidMount() {
        // let id = this.props.match.params.id
        let id = localStorage.getItem('idoperations')
        apiClient.getChecking(id).then((checkings) => {
            this.setState({
                data: checkings.data,
                guestID: checkings.data.guestID,
                roomID: checkings.data.roomID,
                selected: checkings.data,
                extra: checkings.data.extra
            })
        })
    }
    handleDo = () => {
        const { data } = this.state

        /////checking

        apiClient.updateRoomInd(data.roomID._id, { state: "Empty", guestID: null }).then(() => {

            apiClient.chekingAddOne(data._id, { estado: "old" })
        })


    }


    render() {
        const { data } = this.state
        let fullPrice = data.roomID.roomPrice * data.nights
        console.log(data.extra)
        const extras = data.extra.map(function (elem, index) {
            return (
                <div key={index}>
                    <div className="form-data-name">
                        Name:   <span className="form-data-name-small">{elem.name} {elem.description}</span>
                    </div>
                    <div className="form-data-id">
                        Price:   <span className="form-data-name-small">{elem.price + "€"}</span>
                    </div>

                </div>)
        });
        // const total = data.extra.reduce((accum, item) => accum + item.price, 0)

        console.log(data.extras)
        return (
            < div className=" dashboard-container" >
                <div className="form-main" >
                    <div className="form-title">
                        <div className="form-title-item">
                            Set   Room
                    </div>
                    </div>
                    <div className="form-body">
                        <div className="form-body-item">
                            <div className="form-body-data">
                                Room
                            </div>
                            <div className="form-body-data">
                                <input name="roomName" className="input-text-form" defaultValue={data.roomID.roomName} placeholder="Guest ID" type="text" />

                            </div>
                        </div>
                        <div className="form-body-item">
                            <div className="form-body-data">
                                Guest
                            </div>
                            <div className="form-body-data">
                                <input className="input-text-form" name="guestFullName" defaultValue={data.guestID.guestFullName} placeholder="Guest Full name" type="text" />
                            </div>
                        </div>
                        <div className="form-body-item">
                            <div className="form-body-data">
                                Nights
                            </div>
                            <div className="form-body-data">
                                <input className="input-text-form" defaultValue={data.nights} name="roomName" placeholder="Room" type="text" />

                            </div>
                        </div>
                        <div className="form-body-item">
                            <div className="form-body-data">
                                Price x day
                            </div>
                            <div className="form-body-data">
                                <input onChange={this.handleChange} className="input-text-form" defaultValue={data.roomID.roomPrice} name="roomID" placeholder="Room ID" type="text" />


                            </div>
                        </div>


                        <div className="form-body-item">
                            <div className="form-body-data">
                                Total price
                            </div>
                            <div className="form-body-data">
                                <input onChange={this.handleChange} disabled className="inpu-text-form" value={fullPrice} name="price" placeholder="Full price" type="number" />

                            </div>
                        </div>
                    </div>

                </div>

            </div>




        )
    }
}


export default Checkout;