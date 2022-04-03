import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Players from './Players.jsx';
import Lineup from './Lineup.jsx';


class PlayerForm extends React.Component{
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePlayerClick = this.handlePlayerClick.bind(this);
        this.adjustLineup = this.adjustLineup.bind(this);
        this.setState = this.setState.bind(this);
        this.getState = this.getState.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        var DMAG = [
            {
            name: "Brendan",
            gender: "male",
            key: 1,
            selected: false,
            },
            {
            name: "Julia",
            gender: "female",
            key: 2,
            selected: false,
            },
            {
            name: "Mike",
            gender: "male",
            key: 3,
            selected: false,
            },
            {
            name: "Alyssa",
            gender: "female",
            key: 4,
            selected: false,
            },
            {
            name: "Matt",
            gender: "male",
            key: 5,
            selected: false,
            },
            {
            name: "Kelly",
            gender: "female",
            key: 6,
            selected: false,
            },
            {
            name: "Allison",
            gender: "female",
            key: 7,
            selected: false,
            },
            {
            name: "Danica",
            gender: "female",
            key: 8,
            selected: false,
            },
            {
            name: "Iain",
            gender: "male",
            key: 9,
            selected: false,
            },
            {
            name: "Allie",
            gender: "female",
            key: 10,
            selected: false,
            },
            {
            name: "Sean",
            gender: "male",
            key: 11,
            selected: false,
            },
            {
            name: "Emma",
            gender: "female",
            key: 12,
            selected: false,
            },
            {
            name: "Robbie",
            gender: "male",
            key: 13,
            selected: false,
            },
            {
            name: "Sarah",
            gender: "female",
            key: 14,
            selected: false,
            },
            {
            name: "Tony",
            gender: "male",
            key: 15,
            selected: false,
            },
            {
            name: "Kevin",
            gender: "male",
            key: 16,
            selected: false,
            },
            {
                name: "Ben",
                gender: "male",
                key: 17,
                selected: false,
            },
            {
                name: "Morgan",
                gender: "female",
                key: 18,
                selected: false,
            },
            {
                name: "Dan",
                gender: "male",
                key: 19,
                selected: false,
            }
        ]
        let savedState = this.getState();
        if (!savedState){
            this.state = {
                name: '',
                gender: '',
                players: DMAG,
                showModal: false,
                lineup: []
            };

        } else {
            this.state = savedState;
        }
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
        selected: false,
        handleClick: this.handlePlayerClick
      };
    
      this.setState((prevState) => {
        return { 
          players: prevState.players.concat(newPlayer) 
        };
      });
    
    event.preventDefault();
    }

    handlePlayerClick(name, gender, key, selected){
        var player = {
            name: name,
            gender: gender,
            key: key,
        };
        var currentLineup = this.state.lineup;
        var currentPlayers = this.state.players;
        var inLineup = selected;
        var i = 0;
        var remove;
        if (!inLineup) {
            // find player in player list and make them selected
            for (let person of currentPlayers){
                if (person.key === key) {
                    person.selected = true;
                }
            }
            // add player to lineup
            currentLineup.push(player);
            this.setState({
                lineup: currentLineup,
                players: currentPlayers
            });
        } else {
            // find player in player list and mark them unselected
            for (let person of currentPlayers){
                if (person.key === key) {
                    person.selected = false;
                }
            }
            // remove player from lineup
            for (let person of currentLineup) {
                if (person.key === key) {
                    inLineup = true;
                    remove = i;
                }
                i++;
            }
            currentLineup.splice(remove, 1);
            this.setState((prevState) => {
                return {
                    lineup: currentLineup,
                    players: currentPlayers
                }
            });
        }
        this.props.getLineup(currentLineup);
    }

    adjustLineup(data) {
        this.setState(() => {
            return {
                lineup: data
            }
        });
        this.props.getLineup(data);
    }

    persistState() {
        localStorage.setItem("playerState", JSON.stringify(this.state));
        //console.log(localStorage.getItem("scoreboardState"));
    }
    
      getState() {
        let persisted = JSON.parse(localStorage.getItem("playerState"));
        //console.log(persisted);
        return persisted;
    }

    handleShow() {
        this.setState(() => {
            return {
                showModal: true
            }
        });
    }

    handleClose() {
        this.setState(() => {
            return {
                showModal: false
            }
        });
    }

    render() {
        this.persistState();
        return (
        <div className="RosterMain">
            <div className = "container-fluid">
                <div className="row">
                    <div className = "col-xs-12 col-sm-10 col-sm-offset-1">
                        <Button variant="primary" onClick={this.handleShow} id="rosterButton">Add Players to Lineup</Button>
                    </div>
                </div>
                <div className = "row">
                    <div className = "col-xs-12 col-sm-10 col-sm-offset-1">  
                        <Lineup entries={this.state.lineup} sendLineup={this.adjustLineup} />
                    </div>
                </div>
                <Modal show={this.state.showModal} onHide={this.handleClose} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Roster</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className = "col-sm-12">
                            <Players entries={this.state.players} handleClick={this.handlePlayerClick}/>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="default" onClick={this.handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
            <div className = "container-fluid">
            <div className="row">
                <div className="col-sm-6">
                    <h3>Add New Player to Roster</h3>
                </div>
            </div>
            <form onSubmit={this.handleSubmit}>
                <div className = "container-fluid">
                    <div className = "form-group row">
                            <div className = "col-sm-2">
                                <label>
                                Name:
                                </label>
                            </div>
                                <div className = "col-sm-4">
                                <input name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                            </div>
                    </div>
                    <div className = "form-group row">
                        <div className = "col-sm-2">
                            <label>
                                Gender: 
                            </label>
                        </div>
                        <div className = "col-sm-2">
                            <label> 
                                <input name="gender" type="radio" value="male" onChange={this.handleChange} />
                                Male
                            </label>
                        </div>
                        <div className = "col-sm-2"> 
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
                </div>
            </form>
            </div>
        </div>
        );
    }
}

export default PlayerForm;