import React, { Component } from "react";
import Sidebar from "../../components/Sidebar";
import apiClient from "../../services/loginService";


class Checkout extends Component {
    state = {
        guestID: '',
        roomID: '',
        selected: '',
        data: '',
        extra: [],
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
        const { guestID, roomID, data, extra } = this.state

        /////checking
        let estado = "old"
        //id,id,night,to,from

        ////habit
        let state = "Empty"
        apiClient.updateRoomInd(roomID._id, { state: "Empty", guestID: null }).then(() => {

            apiClient.chekingAddOne(data._id, { estado: "old" })
        })


    }


    render() {
        const { guestID, roomID, data, extra } = this.state
        let fullPrice = roomID.roomPrice * data.nights
        console.log(extra)
        const extras = extra.map(function (elem, index) {
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
        const total = extra.reduce((accum, item) => accum + item.price, 0)

        console.log(extras)
        return (
            <div className="main dashboard-container" >
                <Sidebar />


                <div className="content-main-forms ">
                    <div className="content-main-forms-title">
                        Info
                 </div>
                    <label className="" ><b>Name</b></label>

                    <input onChange={this.handleChange} className="input-text-form" name="guestName" defaultValue={guestID.guestName} placeholder="Guest name" type="text" />
                    <label className="" ><b>Full Name</b></label>
                    <input onChange={this.handleChange} className="input-text-form" name="guestFullName" defaultValue={guestID.guestFullName} placeholder="Guest Full name" type="text" />
                    <label className="" ><b>Nights</b></label>
                    <input onChange={this.handleChange} className="input-text-form" defaultValue={data.nights} name="roomName" placeholder="Room" type="text" />
                    <label className="" ><b>Price x Night</b></label>
                    <input onChange={this.handleChange} className="input-text-form" defaultValue={roomID.roomPrice} name="roomID" placeholder="Room ID" type="text" />
                    <label className="" ><b>Total</b></label>
                    <input onChange={this.handleChange} disabled className="input-text-form" value={fullPrice.toString()} name="price" placeholder="Full price" type="number" />
                </div>
                <div className="content-main-forms ">
                    <div className="content-main-forms-title">
                        Info
                    </div>
                    <label className="" ><b>Extras</b></label>

                    {extras}
                    <div className="">
                        <div className="content-main-forms-title">
                            TOTAL :{total} €
                        </div>
                    </div>

                </div>
                <div className="content-main-forms ">
                    <div className="content-main-forms-title">
                        Total
                    </div>
                    <div className="form-data-id">
                        Room:   <span className="form-data-name-small">{fullPrice + "€"}</span>
                    </div>
                    <div className="form-data-id">
                        Extras:   <span className="form-data-name-small">{total + "€"}</span>
                    </div>
                    <div className="content-main-forms-title">
                        {fullPrice + total} €
                    </div>

                    <button onClick={this.handleDo} className="main-cards green">
                        Checkout
                    </button>


                </div>



            </div >
        )
    }
}


export default Checkout;