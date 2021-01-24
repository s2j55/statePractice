import React, { Component } from 'react';

class Clicker extends Component {
  constructor(props){
    super(props);
    this.state = { num : 1};
  }
  genRandom = () => {
    let rand = Math.floor(Math.random()*10) +1;
    this.setState({num: rand});
  }
render(){
  return(
    <div>
      <h2>Number is {this.state.num} </h2>
      {this.state.num === 7 ? (<h3>You win!</h3>) : (<button onClick={this.genRandom}>Random Num</button>)}
    </div>
  )
}
}

export default Clicker;