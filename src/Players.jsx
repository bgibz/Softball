import React from 'react';


class Players extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      lineup: []
    };
  }

  handleClick(name) {
    //const name = event.target.name;
    console.log(name)
  }

  createPlayers(item) {
      return <li key={item.key} className={item.gender} onClick={() => item.handleClick(item.name, item.gender, item.key)}>{item.name}</li>
    }
     
  render() {
    var todoEntries = this.props.entries;
    var players = todoEntries.map(this.createPlayers);
  
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