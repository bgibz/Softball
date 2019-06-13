import React from 'react';

class Lineup extends React.Component {
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
      this.arrayMove(entries, index)
    this.props.sendLineup(entries);
  }

  arrayMove(arr, fromIndex, toIndex) {
    var element = arr[fromIndex];
    arr.splice(fromIndex, 1);
    arr.splice(toIndex, 0, element);
}

  createPlayers(item) {
      return <li key={item.key} className={item.gender}>{item.name}</li>
    }
     
    render() {
    var playerEntries = this.props.entries;
    var players = playerEntries.map(this.createPlayers);
  
    return (
      <div className="lineup">
        <h4>Lineup</h4>
          <ol className="lineupList">
            {players}
          </ol>
        </div>
    );
  }
}

export default Lineup;