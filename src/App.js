import React from 'react';
import './App.css';
import PlayerForm from './PlayerForm';
import Scoreboard from  './Scoreboard';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      topOfOrder: []
    };
    this.getLineup = this.getLineup.bind(this);
  }

  getLineup(data){
    if (data.length > 2){
      this.setState(() => {
        return {
        topOfOrder: data
        }
      });
    }
  }

  render() {
    return (
      <div className="App">
      <div className="App-header">
        <div className="Container">
          <Scoreboard topOfOrder={this.state.topOfOrder}/>
        </div>
      </div>
      <div className="Container">
        <PlayerForm getLineup={this.getLineup}/>
      </div> 
      </div>
    )
  }
}
export default App;