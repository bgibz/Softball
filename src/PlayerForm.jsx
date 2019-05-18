import React from 'react';
import Players from './Players.jsx';
import Lineup from './Lineup.jsx';


class PlayerForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            gender: '',
            players: [],
            lineup: [],
            };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePlayerClick = this.handlePlayerClick.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
      }
    
    handleSubmit(event) {
    var newPlayer = {
        name: this.state.name,
        gender: this.state.gender,
        key: Date.now(),
        handleClick: this.handlePlayerClick
      };
    
      this.setState((prevState) => {
        return { 
          players: prevState.players.concat(newPlayer) 
        };
      });
    
    event.preventDefault();
    }

    handlePlayerClick(name, gender, key){
        var player = {
            name: name,
            gender: gender,
            key: key
        };
        var currentLineup = this.state.lineup;
        var inLineup = false;
        var i = 0;
        var remove;
        for (let player of currentLineup) {
            if (player.key === key) {
                inLineup = true;
                remove = i;
            }
            i++;
        }
        if (!inLineup){
            currentLineup.push(player);
            this.setState((prevState) => {
                return {
                    lineup: currentLineup
                }
            });
        } else {
            currentLineup.splice(remove, 1);
            this.setState((prevState) => {
                return {
                    lineup: currentLineup
                }
            });
        }
        this.props.getLineup(currentLineup);
    }
    
    render() {
        return (
        <div className="RosterMain">
            <form onSubmit={this.handleSubmit}>
            <div className="row">
                <div className = "col-sm-6">
                    <h4> Add a Player </h4>
                </div>
            </div>
                <div className="row">
                    <div className = "col-sm-6">
                        <label>
                        Name:
                        <input name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                        </label>
                    </div>
                </div>
                <div className = "row">
                    <div className = "col-sm-6">
                    <label>
                        Gender: 
                    </label>
                        <label> 
                            <input name="gender" type="radio" value="male" onChange={this.handleChange} />
                            Male
                        </label>
                        
                        <label>
                            <input name="gender" type="radio" value="female" onChange={this.handleChange} />
                            Female
                        </label>
                    </div>
                </div>
                <div className="row">
                    <div className = "col-sm-6">
                        <input className="btn btn-primary" type="submit" value="Submit" />
                    </div>
                </div>
            </form>
            <div className = "container-fluid">
                <div className = "col-sm-6">
                    <Players entries={this.state.players}/>
                </div>
                <div className = "col-sm-6">
                    <Lineup entries={this.state.lineup} sendLineup={this.props.getLineup} />
                </div>
            </div>
        </div>
        );
    }
}

export default PlayerForm;