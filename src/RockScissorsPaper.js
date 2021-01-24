import React, { Component } from "react";
import Hand from './Hand';

class RockScissorsPaper extends Component {
  static defaultProps = {
    potato : ["rock", "scissors", "paper"]
  };
  constructor(props){
    super(props);
    this.state = {fingers1: "rock", fingers2: "rock", rolling: false };
  }

  roll = () => {
    const newFingers1 = this.props.potato[Math.floor(Math.random() * this.props.potato.length)];
    const newFingers2 = this.props.potato[Math.floor(Math.random() * this.props.potato.length)];
    this.setState({fingers1: newFingers1, fingers2: newFingers2, rolling: true});

    setTimeout(() => {
      this.setState({rolling:false})
    },1000);
  }

  render(){
    return(
      <div>
        <div>
          <Hand face={this.state.fingers1} rolling={this.state.rolling} />
          <Hand face={this.state.fingers2} rolling={this.state.rolling}/>
        </div>
        <button onClick={this.roll} disabled={this.state.rolling}>{this.state.rolling ? "Rolling..." : "Rock Scissors Paper"}</button>
      </div>
    )
  }
}

export default RockScissorsPaper;