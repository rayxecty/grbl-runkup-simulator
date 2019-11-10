import React from "react";

export default class NumInput extends React.Component {
    render() {
        return (
            <input type="text" name="name" size="30" onChange={this.props.onChange}></input>
        );
    }
}