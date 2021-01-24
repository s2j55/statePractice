import React, { Component } from "react";
import './Die.css';

class Hand extends Component {

  render(){
    return(
        <i class={`Hand far fa-hand-${this.props.face} ${this.props.rolling && "shaking"}`}></i>
    );
  }
}

export default Hand;