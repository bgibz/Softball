import React from 'react';
import './App.css';
import PlayerForm from './PlayerForm';

class App extends React.Component {

  render() {
    return (
      <div className="App">
      <div className="App-header">
        <div className="Container">
          <div class = "row">
          <p> Test </p>
          </div>
        </div>
      </div>
        <PlayerForm />
      </div> 
    )
  }
}
export default App;