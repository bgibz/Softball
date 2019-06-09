import React from 'react';
import './App.css';
import PlayerForm from './PlayerForm';
import Scoreboard from  './Scoreboard';
import walkupService from './walkupService';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      topOfOrder: [],
      currentOrder: [],
      maleOrder: [],
      femaleOrder: [],
      maleNext: 0,
      femaleNext: 0,
      flag: true,
      doubleGender: "female",
      genderAtBat: "male"
    };
    this.getLineup = this.getLineup.bind(this);
    this.triggerNext = this.triggerNext.bind(this);
    this.initializeOrder = this.initializeOrder.bind(this);
    this.setSiamese = this.setSiamese.bind(this);
    this.walkupService = new walkupService();
  }

  getLineup(data) {
    var men = [];
    var women = [];
    for (let player of data){
      if (player.gender === "male")
        men.push(player);
      else
        women.push(player);
    }
    this.setState(() => {
      return{
        maleOrder: men,
        femaleOrder: women
      }
    });
  }

  initializeOrder(gender) {
    if (gender === 'male'){
      this.setState(() => {
        return {
        genderAtBat: 'male'
        }
      });
    } else {
      this.setState(() => {
        return {
        genderAtBat: 'female'
        }
      });
    }
  }

  setSiamese(choice) {
    this.setState(() => {
      return {
        doubleGender: choice
      }
    });
  }

  triggerNext() {
    // determine if most recent batter was male or female and increment the needed counter
    let men = this.state.maleOrder;
    let women = this.state.femaleOrder;
    let numMen = men.length;
    let numWomen = women.length;
    let total = numMen + numWomen;
    let mNext = this.state.maleNext;
    let fNext = this.state.femaleNext;
    let currGen = this.state.genderAtBat;
    let order = [];
    let nextAtBat = "male";
    if (this.state.flag) {
    this.setState(() => {
      return {
        flag: false
      }
    });
    }
    let m = mNext; // male array counter
    let f = fNext; // female array counter
    let g = currGen; // flag for last gender
    for (let i = 0; i < total; i++){
      if (g === "female") {
        order.push(women[f]);
        f = (f+1) % numWomen;
        if ((f === 0) && (!this.state.flag) && (this.state.doubleGender === "female"))
        {
          g = "female";
        } else {
          g = "male";
        }
      } else {
        order.push(men[m]);
        m = (m+1) % numMen;
        if ((m === 0) && (!this.state.flag) && (this.state.doubleGender === "male"))
        {
          g = "male";
        } else {
          g = "female";
        }
      }
    }
    let orderCopy = order;
    if (orderCopy.length > 3)
      nextAtBat = orderCopy[1].gender;
    if (currGen === "male") {
      mNext = (mNext + 1) % numMen;
    } else if (currGen ==='female') {
      fNext = (fNext + 1) % numWomen;
    }
    this.setState((prevState) => {
      return {
      currentOrder: order,
      maleNext: mNext,
      femaleNext: fNext,
      topOfOrder: orderCopy.splice(0,3),
      genderAtBat: nextAtBat
      }
    });
    if (order.length > 0)
      this.walkupService.playWalkup(order[0].name)
  }

  render() {
    return (
      <div className="App">
      <div className="App-header jumbotron">
          <Scoreboard topOfOrder={this.state.topOfOrder} nextBatter={this.triggerNext}/>
      </div>
      <hr></hr>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h2>Settings</h2>  
          </div>
          <div className="row">
          <table className="table table-borderless">
            <thead>
              <tr>
                <th colSpan="3">Siamese Batters</th>
                <th colSpan = "2">Starting Gender</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <button className = "btn btn-secondary" onClick = {(e) => this.setSiamese("none")}>None</button>
                </td>
                <td>
                <button className = "btn btn-success" onClick = {(e) => this.setSiamese("male")}>Male</button>
                </td>
                <td>
                <button className = "btn btn-success" onClick = {(e) => this.setSiamese("female")}>Female</button>
                </td>
                <td colSpan="2">Male</td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="Container">
        <PlayerForm getLineup={this.getLineup}/>
      </div> 
      </div>
    )
  }
}
export default App;