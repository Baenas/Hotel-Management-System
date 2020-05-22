import React, { Component } from 'react'
import Sidebar from "../../components/Sidebar";
import apiClient from "../../services/loginService";
import { Redirect } from 'react-router-dom'
import GuestOperations from '../operations/GuestOperations'
class ManageRoomState extends Component {

    state = {
        checking: [],
        redirect: '',
        byroom: '',
        byname: '',
        byidcard: '',
        app: '',
        id: '',
        stateFind: 'active'

    }

    componentDidMount() {


        apiClient.allChecking().then((checkings) => {
            this.setState({
                checking: checkings.data
            })
        })


    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value

        })


    }

    getType = () => {


        this.state.stateFind === "active" ? this.setState({ stateFind: "old" }) : this.setState({
            stateFind: "active",


        })

        this.setState({
            byroom: "",
            byname: "",
            byidcard: ""
        })
    }

    active = () => {
        const { checking, byname, byroom, stateFind, byidcard } = this.state
        let active = checking.filter(propery => propery.estado === stateFind && propery.roomID.roomName.indexOf(byroom) > -1 &&
            propery.guestID.guestFullName.toLowerCase().indexOf(byname.toLowerCase()) > -1 && propery.guestID.guestIdCard.toLowerCase().indexOf(byidcard.toLowerCase()) > -1)
            .slice(0, 4).map(function (elem, index) {
                return (
                    <tr key={index} >

                        <td hidden className="table-item">{elem.roomID._id}</td>
                        <td className="table-item">{elem.roomID.roomName}</td>
                        <td className="table-item">{elem.guestID.guestFullName}</td>
                        <td className="table-item">{elem.guestID.guestIdCard}</td>
                        <td className="table-item">{elem.nights}</td>
                        <td className="table-item">{elem.roomID.roomPrice}</td>
                        <td className="table-item">{elem.roomID.roomPrice * elem.nights}</td>
                        <td className="table-item">{elem.day_From + " - " + elem.day_To}</td>
                        <td className="" onClick={() => { localStorage.setItem('idoperations', elem._id) }} ><button className="button-small" type="submit" >Select</button></td>
                        {/* <td className="table-item-red" type="submit"><Link to={"/manageroom?out=" + .guestID._id} >OUT</Link></td> */}
                        {/* <td className="button-fix" >  <Link to={"/manageroom/" + elem._id}> GO </Link>  </td> */}

                    </tr >
                )
            })
        return active
    }

    render() {


        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }


        return (
            <div>
                <Sidebar />
                <div className="main ">



                    <div className="row">



                        <div className="login-box-title">

                            {this.state.stateFind === "active" ? <input className="tablehead" placeholder="Name" name="byname" onChange={this.handleChange} type="text"></input>
                                : <div><input className="tablehead" placeholder="Name" name="byname" onChange={this.handleChange} type="text"></input> </div>}
                        </div>
                        <div className="login-box-title">
                            {this.state.stateFind === "active" ? <input className="tablehead" placeholder="Room" name="byroom" onChange={this.handleChange} type="text"></input>
                                : <div><input className="tablehead" placeholder="ID card" name="byidcard" onChange={this.handleChange} type="text"></input> </div>}
                        </div>
                        <div className="login-box-title">
                            <button onClick={this.getType} className="button-small">
                                {this.state.stateFind}
                            </button>

                        </div>

                    </div>


                    <form onSubmit={this.handleSubmit}>
                        <table className="container-forms" >
                            <tbody>

                                <tr>

                                    <th hidden className="button-fix" >Room</th>
                                    <th className="tablehead" >Room</th>
                                    <th className="tablehead" >Full Name</th>
                                    <th className="tablehead" > Card ID</th>
                                    <th className="tablehead" > Nights</th>
                                    <th className="tablehead" > Price Night</th>
                                    <th className="tablehead" > Total Price</th>
                                    <th className="tablehead" > Dates</th>
                                    <th className="tablehead" > Actions</th>



                                </tr>

                                {this.active()}
                            </tbody>
                        </table>

                    </form>
                </div>
                <div className="main">

                    {this.state.stateFind === "active" ? <GuestOperations /> : <div></div>}

                </div>

            </div >
        )
    }
}

export default ManageRoomState   