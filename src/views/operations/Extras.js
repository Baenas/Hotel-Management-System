import React, { Component } from 'react';
import Sidebar from "../../components/Sidebar";
import apiClient from "../../services/loginService";
class Extras extends Component {
    state = {
        extras: [],
    }
    componentDidMount() {
        apiClient.extras().then((extras) => {
            this.setState({
                extras: extras.data
            })
        })

    }

    showExtra = () => {
        const { extras } = this.state

        let extradata = extras.map((extra, index) => {
            return (
                <div key={index}>
                    {extra.name}
                </div>
            )
        })
        console.log(extradata)
        return extradata
    }
    render() {
        return (


            <div className="main dashboard-container">
                <Sidebar />
                <ul>
                    {this.showExtra()}
                </ul>
            </div>

        )
    }
}

export default Extras;