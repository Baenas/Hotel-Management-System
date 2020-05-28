import React, { Component } from 'react'
import TopBar from "../../components/bars/Topbar";
import FormGuest from '../../components/forms/FormGuest'
import FindRoom from '../operations/FindRoom';
import CheckingData from './CheckingData'
import apiClient from "../../services/loginService";

class Checking extends Component {
    state = {
        guestID: localStorage.getItem('id'),
        roomID: '',
        rooms: [],
        findType: "Double",
        selected: "",
        extraName: "",
        extraAge: "",
        show: true,
        show2: true,
        show3: false,


    }


    componentDidMount() {
        apiClient
            .roomsAll().then((rooms) => {
                this.setState({
                    rooms: rooms.data,
                })

            })


    }



    getType = () => {


        this.state.findType === "Double" ? this.setState({ findType: "Single" }) : this.setState({
            findType: "Double"
        })
    }

    getRoom = () => {
        let { findType } = this.state

        const { rooms } = this.state

        let showRoom = rooms.filter(query => query.roomType === findType && query.state === "Empty")

        let randomRoom = showRoom[Math.floor(Math.random() * showRoom.length)];

        console.log(randomRoom)
        if (randomRoom) {

            this.setState({
                selected: randomRoom,
                roomID: randomRoom._id,
                show3: true

            })
        }

    }

    saved = () => {

        let obj = localStorage.getItem('room01')

        JSON.parse(obj)
        if (JSON.parse(obj).state === "Empty") {

            this.setState({
                selected: JSON.parse(obj),
                roomID: JSON.parse(obj)._id
            })
        }

    }
    handleChange = (e) => {
        this.setState({

            [e.target.name]: e.target.value

        })
    }
    extraGuest = () => {
        let { findType } = this.state

        if (findType === "Double") {

            return (

                <div className="content-main-forms" >
                    <div className="content-main-forms-title">
                        Extra guest
              </div>
                    <label className="" ><b>Name</b></label>
                    <input onChange={this.handleChange} className="input-text-form" name="extraName" placeholder="Guest name" type="text" />
                    <label className="" ><b>Age</b></label>
                    <input onChange={this.handleChange} name="extraAge" className="input-text-form" placeholder="Age" type="text" />
                </div >
            )
        }

    }

    showMe2 = () => {
        const { show2 } = this.state


        show2 === true ? this.setState({ show2: false }) : this.setState({ show2: true })

    }

    showMe3 = () => {
        const { show3 } = this.state


        show3 === true ? this.setState({ show3: false }) : this.setState({ show3: true })

    }
    showMe = () => {
        const { show } = this.state

        show === true ? this.setState({ show: false }) : this.setState({ show: true })


    }
    render() {
        const { guestID, roomID, extraName, extraAge, show, show2, show3 } = this.state



        return (

            <div className="" >
                <TopBar />
                {/* <button className="button-small" onClick={this.showMe}>
                    Step: 1
                </button>
                <button className="button-small" onClick={this.showMe2}>
                    Step: 2

                </button>
                <button className="button-small" onClick={this.showMe3}>
                    Step: 3
                </button> */}

                <div className="main-side">
                    {show === true ? <FormGuest /> : null}
                    {show2 === true ? <FindRoom data={this.state.selected} showType={this.state.findType} type={this.getType} filter={this.getRoom} /> : null}
                    {show3 === true ? <CheckingData guest={guestID} extraName={extraName} extraAge={extraAge} room={roomID} data={this.state.selected} /> : null}
                </div>


                {/* <FindRoom saved1={this.saved} data={this.state.selected} showType={this.state.findType} type={this.getType} filter={this.getRoom} />
                    <CheckingData guest={guestID} extraName={extraName} extraAge={extraAge} room={roomID} data={this.state.selected} /> */}


                {/* {this.extraGuest()} */}
            </div >





        )
    }
}

export default Checking