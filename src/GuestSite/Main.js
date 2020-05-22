import React, { Component } from 'react'
import apiClient from "../services/loginService";
class Main extends Component {


    state = {
        checkin: []
    }

    handleSubmit = (e) => {
        e.preventDefault()
        apiClient.allChecking().then((data) => {
            this.setState({
                checkin: data.data
            })
        })
    }
    render() {




        return (
            <div>
                <div>
                    <form className="login-box" onSubmit={this.handleSubmit}>
                        <h1 className="login-box-title">GUEST</h1>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            placeholder="Room Number"

                            onChange={this.handleChange}
                            className="login-box-input"
                        />
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder=""

                            onChange={this.handleChange}
                            className="login-box-input"
                        />
                        <input type="submit" value="submit" className="login-box-submit" />
                        <p className="login-box-title"></p>
                    </form>
                </div>
            </div>
        )
    }
}
export default Main;