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
        app: '',
        id: '',

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

    active = () => {
        const { checking, byname, byroom } = this.state
        let active = checking.filter(propery => propery.roomID.state === "active" && propery.roomID.roomName.indexOf(byroom) > -1 && propery.guestID.guestName.toLowerCase().indexOf(byname.toLowerCase()) > -1)
            .map(function (elem, index) {
                return (
                    <tr key={index} >

                        <td hidden className="table-item">{elem.roomID._id}</td>
                        <td className="table-item">{elem.roomID.roomName}</td>
                        <td className="table-item">{elem.guestID.guestFullName}</td>
                        <td className="table-item">{elem.guestID.guestIdCard}</td>
                        <td className="table-item">{elem.nights}</td>
                        <td className="table-item">{elem.roomID.roomPrice}</td>
                        <td className="table-item">{elem.roomID.roomPrice * elem.nights}</td>
                        <td onClick={() => { localStorage.setItem('idoperations', elem._id) }} ><input className="table-item" type="submit" /></td>
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
                <div className="main">



                    <table className="container-forms" >
                        <tbody>
                            <tr>
                                <td className="button-fix"><input onChange={this.handleChange} placeholder="By Room" name="byroom" type="text" /></td>
                                <td className="button-fix"><input onChange={this.handleChange} placeholder="By Name" name="byname" type="text" /></td>

                            </tr>
                        </tbody>
                    </table>
                    <form onSubmit={this.handleSubmit}>
                        <table className="container-forms" >
                            <tbody>

                                <tr>

                                    <th hidden className="button-fix" >Room</th>
                                    <th className="button-fix" >Room</th>
                                    <th className="button-fix" >Full Name</th>
                                    <th className="button-fix" > Card ID</th>
                                    <th className="button-fix" > Nights</th>
                                    <th className="button-fix" > Price Night</th>
                                    <th className="button-fix" > Total Price</th>
                                    <th className="button-fix" > Actions</th>


                                </tr>

                                {this.active()}
                            </tbody>
                        </table>

                    </form>
                </div>
                <div className="main">
                    <GuestOperations />
                </div>

            </div >
        )
    }
}

export default ManageRoomState   