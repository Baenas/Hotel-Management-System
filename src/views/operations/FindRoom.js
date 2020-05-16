import React, { Component } from 'react';
import CardL from "../../components/cards/CardL";
import { Redirect } from 'react-router-dom'
class FindRoom extends Component {
    state = {
        room: {},
        selected: "",
        redirect: null,
    }
    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }

        return (
            <div className="dashboard-container" >
                <div className="container-forms   overflow" >
                    <CardL title="Rooms" />

                    <button onClick={this.props.type} className="button-fix">{this.props.showType} </button>
                    <button onClick={this.props.filter} className="button-fix">New room</button>
                    <button onClick={this.props.saved1} className="button-fix">Saved 1</button>




                </div>
            </div >
        )
    }


}

export default FindRoom