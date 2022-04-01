import React from 'react';


class Players extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.props.handleClick.bind(this);
    this.createPlayers = this.createPlayers.bind(this);
    this.state = {
      lineup: []
    };
  }

  createPlayers(item) {
    item.handleClick = this.handleClick;
    if (item.selected === true)
      return <li key={item.key} className={item.gender} selected={item.selected} onClick={() => this.handleClick(item.name, item.gender, item.key, item.selected)}>{item.name}<span className = 'fa fa-check' aria-hidden='true'></span></li>
    else
      return <li key={item.key} className={item.gender} selected={item.selected} onClick={() => this.handleClick(item.name, item.gender, item.key, item.selected)}>{item.name}</li>
    }
     
  render() {
    var playerEntries = this.props.entries;
    var players = playerEntries.map(this.createPlayers);
  
    return (
      <div className="roster">
        <h4>Roster</h4>
        <ul className="theList">
          {players}
        </ul>
      </div>
    );
  }
}

export default Players;