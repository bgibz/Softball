import React from 'react';

class Lineup extends React.Component {
  constructor(props) {
    super(props);
    this.movePlayer = this.movePlayer.bind(this);
    this.createPlayers = this.createPlayers.bind(this);
  }

  movePlayer(playerName, direction) {
    var count = 0;
    var index;
    var entries = this.props.entries;
    for (let player of entries) {
      if (playerName === player.name) {
        index = count;
        break;
      }
      count++
    }
    if ((index + direction >= 0) && (index + direction <= entries.length))
      this.arrayMove(entries, index, index+direction);
    this.props.sendLineup(entries);
  }

  arrayMove(arr, fromIndex, toIndex) {
    var element = arr[fromIndex];
    arr.splice(fromIndex, 1);
    arr.splice(toIndex, 0, element);
}

  createPlayers(item) {
      return <div className="lineupCard row">
              <div className="lineupSidebar col-xs-1">
                <div className="lineupUp">
                  <span className = 'fa fa-caret-up' onClick = {() => this.movePlayer(item.name, -1)}></span>
                </div>
                <div className="lineupDown">
                  <span className = "fa fa-caret-down" onClick = {() => this.movePlayer(item.name, 1)}></span>
                </div>
              </div>
              <div className = "col-xs-10">
                <li key={item.key} className={item.gender}>{item.name}</li>
              </div>
            </div>
    }
     
    render() {
    var playerEntries = this.props.entries;
    var players = [];
    for (let i = 0; i < playerEntries.length; i++) {
      players[i] = this.createPlayers(playerEntries[i]);
    }
      
    return (
      <div className="lineup">
        <h4>Lineup</h4>
          <ul className="lineupList">
            {players}
          </ul>
        </div>
    );
  }
}

export default Lineup;