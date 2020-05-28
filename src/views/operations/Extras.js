import React, { Component } from 'react';
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

    showExtraType = () => {
        const { extras } = this.state

        var result = Array.from(new Set(extras));
        return result

    }
    render() {

        return (


            <div className="main dashboard-container">
                <ul>
                    {this.showExtra()}
                </ul>
            </div>

        )
    }
}

export default Extras;