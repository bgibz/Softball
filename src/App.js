import React from 'react';
import './App.css';
import PlayerForm from './PlayerForm';
import Scoreboard from  './Scoreboard';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      topOfOrder: [],
      currentOrder: [],
      maleOrder: [],
      femaleOrder: [],
      maleNext: 0,
      femaleNext: 0
    };
    this.getLineup = this.getLineup.bind(this);
    this.triggerNext = this.triggerNext.bind(this);
  }

  getLineup(data) {
    // TODO: split into male and female order
    var men = [];
    var women = [];
    for (let player of data){
      if (player.gender === "male")
        men.push(player);
      else
        women.push(player);
    }
    this.setState((prevState) => {
      return{
        maleOrder: men,
        femaleOrder: women
      }
    });
  }

  initializeOrder(gender) {
    if (gender === 'male'){

    }
  }

  triggerNext() {
    // determine if most recent batter was male or female and increment the needed counter
    console.log("TRIGGER");
    let men = this.state.maleOrder;
    let women = this.state.femaleOrder;
    let numMen = men.length;
    let numWomen = women.length;
    let total = numMen + numWomen;
    let mNext = this.state.maleNext;
    let fNext = this.state.femaleNext;
    let currGen = 'female';
    if (!(this.state.topOfOrder[0] === undefined)){
      currGen = this.state.topOfOrder[0].gender;
    }
    
    let order = [];
    if (currGen === "male") {
      mNext = (mNext + 1) % numMen;
    } else if (currGen ==='female') {
      fNext = (fNext + 1) % numWomen;
    }
    let m = mNext; // male array counter
    let f = fNext; // female array counter
    let g = currGen; // flag for last gender
    for (let i = 0; i < total; i++){
      if (g === "male") {
        order.push(women[f]);
        f = (f+1) % numWomen;
        g = "female";
      } else {
        order.push(men[m]);
        m = (m+1) % numMen;
        g = "male";
      }
    }
    let orderCopy = order;
    this.setState((prevState) => {
      return {
      currentOrder: order,
      maleNext: mNext,
      femaleNext: fNext,
      topOfOrder: orderCopy.splice(0,3)
      }
    });
  }

  render() {
    return (
      <div className="App">
      <div className="App-header">
        <Scoreboard topOfOrder={this.state.topOfOrder} nextBatter={this.triggerNext}/>
      </div>
      <div className="Container">
        <PlayerForm getLineup={this.getLineup}/>
      </div> 
      </div>
    )
  }
}
export default App;