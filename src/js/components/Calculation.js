import React from "react";
import Button from "./input/Button";

export default class Calculation extends React.Component {
    constructor() {
        super();
        this.state = {
            result: ""
        }
    }
    handleChange(e) {
        const value = "必要な周回数：わからん";
        this.setState({result: value});
    }
    render() {
        return (
            <div>
                <Button value={"計算する"} onClick={this.handleChange.bind(this)}/>
                <h2>{this.state.result}</h2>
            </div>
        );
    }
}