import React from "react";
import NumInput from "./input/NumInput";

export default class RankInput extends React.Component {
    constructor() {
        super();
        this.state = {
            rank: null
        }
    }
    handleChange(e) {
        const value = e.target.value;
        this.setState({rank: value});
    }
    render() {
        return (
            <div>
                <h3>{this.props.title}:{this.state.rank}</h3>
                <NumInput onChange={this.handleChange.bind(this)}/>
            </div>
        );
    }
}