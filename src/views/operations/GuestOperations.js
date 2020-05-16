import React, { Component } from 'react'
import CardL from "../../components/cards/CardL";
import apiClient from "../../services/loginService";
import { withRouter, Link } from 'react-router-dom';
class GuestOperation extends Component {
    state = {
        id: '',
        data: [],
        guest: [],
        room: []
    }

    componentDidMount() {
        // let id = this.props.match.params.id
        let id = localStorage.getItem('idoperations')

        apiClient.getChecking(id).then((checkings) => {
            if (!checkings.data) {
            } else {
                this.setState({
                    data: checkings.data,
                    guest: checkings.data.guestID,
                    room: checkings.data.roomID

                })
                localStorage.setItem('id', checkings.data.guestID._id)

            }
        })

    }

    render() {

        const { data, guest, room } = this.state

        return (
            <div>
                <CardL title="Guest Actions" />
                <table className="container-forms" >
                    <tbody>

                        <tr>
                            <th className="table-item-red" >  {room.roomName}</th>
                            <th className="table-item" ><Link to={'/rooms/' + room._id}>  Guest Room</Link></th>
                            <th className="table-item-red" ><Link to={'/guest/' + guest._id}> Guest Info</Link></th>
                        </tr>
                    </tbody>
                </table>
                <table className="container-forms" >
                    <tbody>

                        <tr>
                            <th className="table-item" ><Link to={'/checkout/' + localStorage.getItem('idoperations')}> Checkout</Link></th>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default withRouter(GuestOperation)