import React, { Component } from 'react'
import apiClient from "../../services/loginService";
import { withRouter } from 'react-router-dom';
import Checkout from '../../views/operations/Checkout'
import RoomId from '../rooms/RoomId'
import Extras from '../../views/operations/Extras'

class GuestOperation extends Component {
    state = {
        id: '',
        data: [],
        guest: [],
        room: [],
        show: '',


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
        const { data, room, show } = this.state

        let showcomp = () => {

            if (show === "room") {
                return <RoomId data={data} />

            } else if (show === "out") {

                return <Checkout data={data} />
            } else if (show === "extra") {
                return <Extras data={data} />
            }

        }



        return (
            <div>


                <table className="container-forms" >
                    <tbody>

                        <tr>
                            <th className="button-small" >  {room.roomName}</th>
                            <th onClick={() => this.setState({ show: "room" })} className="button-small" >Room</th>
                            <th onClick={() => this.setState({ show: "extra" })} className="button-small" >Extras</th>
                            {/* <Link to={'/rooms/' + room._id}>  Guest Room</Link></th> */}

                        </tr>

                    </tbody>
                </table>
                <table className="container-forms" >
                    <tbody>


                        <tr>
                            <th className="button-small " >  Key : {data.dashkey} </th>

                            <th onClick={() => this.setState({ show: "out" })} className="button-small" >Checkout</th>

                        </tr>
                    </tbody>
                </table>
                <div className="">
                    {showcomp()}
                </div>
            </div>
        )
    }
}

export default withRouter(GuestOperation)