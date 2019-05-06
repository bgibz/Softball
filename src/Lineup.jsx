import React from 'react';

class Lineup extends React.Component {

    createPlayers(item) {
        return <li key={item.key} className={item.gender}>{item.name}</li>
      }
     
      render() {
        var todoEntries = this.props.entries;
        var players = todoEntries.map(this.createPlayers);
     
        return (
          <div className="roster">
            <h4>Roster</h4>
            <ol className="theList">
              {players}
            </ol>
          </div>
        );
      }
}

export default Lineup;