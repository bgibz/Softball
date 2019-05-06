import React from 'react';
import './App.css';
import PlayerForm from './PlayerForm';
import Scoreboard from  './Scoreboard';

class App extends React.Component {

  render() {
    return (
      <div className="App">
      <div className="App-header">
        <div className="Container">
          <Scoreboard />
        </div>
      </div>
      <div className="Container">
        <PlayerForm />
      </div> 
    )
  }
}
export default App;