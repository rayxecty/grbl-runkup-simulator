import React from "react";

export default class Button extends React.Component {
    render() {
        return (
            <input type="button" value={this.props.value} onClick={this.props.onClick}></input>
        );
    }
}