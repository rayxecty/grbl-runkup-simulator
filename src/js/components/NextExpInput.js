import React from "react";
import NumInput from "./input/NumInput";

export default class NexrExpInput extends React.Component {
    constructor() {
        super();
        this.state = {
            nextExp: null
        }
    }
    handleChange(e) {
        const value = e.target.value;
        this.setState({nextExp: value});
    }
    render() {
        return (
            <div>
                <h3>{this.props.title}:{this.state.nextExp}</h3>
                <NumInput onChange={this.handleChange.bind(this)}/>
            </div>
        );
    }
}