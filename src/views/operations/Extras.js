import React, { Component } from 'react';
import apiClient from "../../services/loginService";
class Extras extends Component {
    state = {
        extras: [],
        type: "",
        extrafiltred: [],
        selected: [],
        selectedNumber: 0
    }
    componentDidMount() {
        apiClient.extras().then((extras) => {
            this.setState({
                extras: extras.data
            })
        })

    }




    handleItem = (e) => {

        const { extras } = this.state

        const extrafiltred = extras.filter((extra => extra.type === e.target.name))
        this.setState({ extrafiltred: extrafiltred })

    }

    items = () => {
        const { extrafiltred } = this.state

        let items = extrafiltred.map((item, index) => {
            return (
                <div onClick={() => localStorage.setItem('idextra', item._id)} className="extra-main" key={index} >

                    <div >


                        <div className="" >{item.name}</div>
                        <div className="" >{item.description}</div>
                        <div className="" >{item.price} €</div>
                    </div>
                </div>
            )
        })
        return items
    }
    idtoExtra = () => {
        const id = localStorage.getItem('idextra')
        const { extras, selected, selectedNumber } = this.state

        const extrafromid = extras.filter((extra => extra._id === id))
        this.setState({
            selected: extrafromid,
        })
    }
    sumar = () => {
        const id = localStorage.getItem('idextra')

        const { extras, selected, selectedNumber } = this.state
        const extrafromid = extras.filter((extra => extra._id === id))
        this.setState({
            selected: extrafromid,
        })
        this.setState({ selectedNumber: this.state.selectedNumber += 1 })

    }
    restar = () => {
        const id = localStorage.getItem('idextra')

        const { extras, selected, selectedNumber } = this.state
        const extrafromid = extras.filter((extra => extra._id === id))
        this.setState({
            selected: extrafromid,
        })
        if (this.state.selectedNumber >= 1) {

            this.setState({ selectedNumber: this.state.selectedNumber -= 1 })
        }

    }

    Addextra = () => {
        const { selected, selectedNumber } = this.state
        const id = localStorage.getItem('idoperations')
        for (let index = 0; index < selectedNumber; index++) {

            apiClient.chekingPush(id, { extra: selected })
        }
    }
    render() {

        const { selected, selectedNumber } = this.state
        const extraItem = selected.map((id, index) => {
            return (
                <div key={index} >
                    <div className="title-info"  >   {id.name} º {selectedNumber}  </div>
                    <div className="title-info"  > {id.price * selectedNumber} € </div>
                </div>
            )
        })

        return (
            <div>
                <div className="main dashboard-container">
                    <ul>
                        <button name="Services" onClick={this.handleItem} className="title-info" >Services</button>
                        <button name="Food" onClick={this.handleItem} className="title-info" >Food</button>
                        <button name="Drink" onClick={this.handleItem} className="title-info" >Drink</button>


                        <br></br>

                        <button onClick={this.restar} className="button-small">-</button>
                        <button onClick={this.sumar} className="button-small">+</button>
                        <button onClick={this.Addextra} className="button-small">ADD</button>


                    </ul>

                </div>

                <div className="extra-content">


                    {this.items()}

                    {extraItem}

                </div>


                <div>
                </div>
            </div>


        )
    }
}

export default Extras;