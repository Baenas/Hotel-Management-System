import React, { Component } from 'react';
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

            <div className="form-main">

                <div className="form-title">
                    <div className="form-title-item">
                        Room
                        </div>
                </div>

                <div className="form-body">
                    <div className="form-body-item">

                        <div className="form-body-data">
                            <button onClick={this.props.type} className="button-small">{this.props.showType} </button>
                            <button onClick={this.props.filter} className="button-small">New room</button>

                        </div>
                    </div>


                </div>
            </div>





        )
    }


}

export default FindRoom