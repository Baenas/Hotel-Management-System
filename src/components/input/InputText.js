import React, { Component } from 'react'

class InputText extends Component{
    render(){
        return(
            <div>
                <input placeholder={this.props.placeholder}  className={this.props.class} type={this.props.type}></input>
            </div>
        )
    }
}

export default InputText