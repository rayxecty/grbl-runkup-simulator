import React from "react";
import Header from "./Header";
import RunkInput from "./RankInput";
import NexrExpInput from "./NextExpInput";
import Calculation from "./Calculation"
import Footer from "./Footer";

export default class Layout extends React.Component {
    constructor() {
        super();
        this.name = "aaaaaa";
        this.state = {
            title: "ranku age simyu",
            nowRank: "現在のランク",
            targetRank: "目標ランク",
            
        }
    }
    render() {
        return (
            <div>
                <Header title={this.state.title}/>
                <h4>It's {this.state.title}!</h4>
                <RunkInput title={this.state.nowRank}/>
                <RunkInput title={this.state.targetRank}/>
                <NexrExpInput title={"Next"}/>
                <Calculation/>
                <Footer />
            </div>
        );
    }
}