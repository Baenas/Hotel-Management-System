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
            <div className="content-main-forms" >
                <div className="content-col" >

                    <button onClick={this.props.type} className="button-small">{this.props.showType} </button>
                    <button onClick={this.props.filter} className="button-small">New room</button>
                    <button onClick={this.props.saved1} className="button-small">Saved 1</button>




                </div>
            </div >
        )
    }


}

export default FindRoom