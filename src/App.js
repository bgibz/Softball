import React from 'react';
import './App.css';
import './toggle.css';
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
      doubleGender: "none",
      genderAtBat: "male",
      media: true
    };
    this.getLineup = this.getLineup.bind(this);
    this.triggerNext = this.triggerNext.bind(this);
    this.setInitialGender = this.setInitialGender.bind(this);
    this.setSiamese = this.setSiamese.bind(this);
    this.walkupService = new walkupService();
    this.toggleMute = this.toggleMute.bind(this);
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

  setInitialGender(event) {
    // Only do something at top of the order
    if (this.state.maleNext === 0 && this.state.femaleNext === 0) {
      if (event.target.checked) {
        this.setState(() => {
          return {
            genderAtBat: "female"
          }
        });
      } else {
        this.setState (() => {
          return {
            genderAtBat: "male"
          }
        });
      }
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
    if (order.length > 0 && this.state.media)
      this.walkupService.playWalkup(order[0].name)
  }

  toggleMute() {
    if (this.state.media){
      this.walkupService.stopAll();
      this.setState({
        media: false
      });
    } else {
      this.setState({
        media: true
      });
    }
  }

  render() {
    var noneButton = "btn btn-secondary btn-sm";
    if (this.state.doubleGender === "none")
      noneButton = "btn btn-success btn-sm";
    var maleButton = "btn btn-secondary btn-sm";
    if (this.state.doubleGender === 'male')
      maleButton = "btn btn-success btn-sm";
    var femaleButton = "btn btn-secondary btn-sm";
    if (this.state.doubleGender === 'female')
      femaleButton = "btn btn-success btn-sm";
    var muteButton = "btn btn-secondary btn-sm";
    if (!this.state.media)
      muteButton = "btn btn-danger btn-sm";
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
        </div>
          <div className="row">
          <div className = "col-sm-12">
            <div className = "table-responsive">
            <table className="table table-borderless">
              <thead>
                <tr>
                  <th colSpan="3">Siamese Batters</th>
                  <th colSpan = "4">Starting Gender</th>
                  <th>Mute</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                  <button className = {noneButton} onClick = {(e) => this.setSiamese("none")}>None</button>
                  </td>
                  <td>
                  <button className = {maleButton} onClick = {(e) => this.setSiamese("male")}>Male</button>
                  </td>
                  <td>
                  <button className = {femaleButton} onClick = {(e) => this.setSiamese("female")}>Female</button>
                  </td>
                  <td><span className="toggleLabelLeft"><strong> M </strong></span></td>
                  <td colSpan='2'>
                  <div className="toggle">
                    <input type="checkbox" className="check" id="genderToggle" onChange= {this.setInitialGender}></input>
                    <b className="b switch"></b>
                    <b className="b track"></b>
                  </div>
                  </td>
                  <td><span className="toggleLabelRight"><strong> F </strong></span></td>
                  <td><button className = {muteButton} onClick = {(e) => this.toggleMute()}>
                    <i className = "fa fa-volume-off"></i>
                  </button></td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="container-fluid">
        <PlayerForm getLineup={this.getLineup}/>
      </div> 
      </div>
    )
  }
}
export default App;