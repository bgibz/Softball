import React from 'react';

class Lineup extends React.Component {

    createPlayers(item) {
        return <li key={item.key} className={item.gender}>{item.name}</li>
      }
     
      render() {
        var todoEntries = this.props.entries;
        var players = todoEntries.map(this.createPlayers);
     
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