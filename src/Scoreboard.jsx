import React from 'react';
import './Scoreboard.css';
import UpcomingBatters from './UpcomingBatters.jsx';

class Scoreboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inning: 1,
            half: 'top',
            homescore: 0,
            awayscore: 0,
            home: 'Home',
            away: 'Away',
            outs: 0,
            scoreboard: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        };

        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        if (name === "half" && value === "top") {
            this.setState((state) => {
                return {
                    inning: state.inning + 1,
                    half: "top"
                }
            });
        }
        this.setState({
            [name]: value
        });
    }

    endhalf(action) {
        if (this.state.half === "top") {
            if (action === "next") {
                this.setState(() => {
                    return { 
                        half: "bottom",
                        outs: 0
                    }
                });
            }
            if (action === "last" && this.state.inning > 1) {
                this.setState((state) => {
                    return {
                        half: "top",
                        inning: state.inning - 1,
                        outs: 0
                    }
                });
            }
        } else{
            if (action === "next") {
                this.setState((state) => {
                    return { 
                        half: "top",
                        inning: state.inning + 1,
                        outs: 0 
                    }
                });
            }
            if (action === "last") {
                this.setState(() => {
                    return { 
                        half: "top",
                        outs: 0 
                    }
                });
            }
            
        }
    }

    incrementScore(team) {
        if (team === "home") {
            var scoreboardIndex = (this.state.inning * 2) - 2;
            var scoreboardCopy = this.state.scoreboard;
            scoreboardCopy[scoreboardIndex] += 1;
            this.setState((state) => {
                return { 
                    homescore: state.homescore + 1,
                    scoreboard: scoreboardCopy
                 }
            });
        } else{
            var scoreboardIndex = (this.state.inning * 2) - 1;
            var scoreboardCopy = this.state.scoreboard;
            scoreboardCopy[scoreboardIndex] += 1;
            this.setState((state) => {
                return { 
                    awayscore: state.awayscore + 1,
                    scoreboard: scoreboardCopy 
                }
            });
        }
    }

    decrementScore(team) {
        if (team === "home") {
            var scoreboardIndex = (this.state.inning * 2) - 2;
            var scoreboardCopy = this.state.scoreboard;
            scoreboardCopy[scoreboardIndex] -= 1;
            this.setState((state) => {
                return { 
                    homescore: state.homescore - 1,
                    scoreboard: scoreboardCopy 
                }
            });
        } else{
            this.setState((state) => {
                var scoreboardIndex = (this.state.inning * 2) - 1;
                var scoreboardCopy = this.state.scoreboard;
                scoreboardCopy[scoreboardIndex] -= 1;
                return { 
                    awayscore: state.awayscore - 1,
                    scoreboard: scoreboardCopy 
                }
            });
        }
    }

    addOut() {
        if (this.state.outs >= 2){
            this.endhalf("next");
            this.setState((state) => {
                return { outs: 0}
            });
        } else {
            this.setState((state) => {
                return { outs: state.outs + 1 }
            });
        }
    }

    nextBatter() {
        this.props.nextBatter();
    }


    render() {
        var arrow = 'fa fa-caret-up';
        if (this.state.half === "bottom")
            arrow = 'fa fa-caret-down';
        var outs = "<span class = 'fa fa-circle-o' aria-hidden='true'></span>"
        + " <span class = 'fa fa-circle-o' aria-hidden='true'></span>"
        + " <span class = 'fa fa-circle-o' aria-hidden='true'></span>";
        if (this.state.outs === 1) {
            outs = "<span class = 'fa fa-circle' aria-hidden='true'></span>"
            + " <span class = 'fa fa-circle-o' aria-hidden='true'></span>"
            + " <span class = 'fa fa-circle-o' aria-hidden='true'></span>";
        }
        if (this.state.outs >= 2) {
            outs = "<span class = 'fa fa-circle' aria-hidden='true'></span>"
            + " <span class = 'fa fa-circle' aria-hidden='true'></span>"
            + " <span class = 'fa fa-circle-o' aria-hidden='true'></span>";
        }
        
        return (
            <div className = "scoreboard">
            <div className = "container-fluid">
                <div className = "row">
                <div className = "col-md-12">
                    <table className = "greenTable">
                        <tbody>
                            <tr>
                                <th>{this.state.home}</th>
                                <td>
                                    <table className = "hiddenTable">                                
                                        <tbody>
                                            <tr>
                                            <td rowSpan = '2'>{this.state.homescore}</td>
                                            <td><button className='btn btn-secondary btn-sm' onClick = {(e) => this.incrementScore("home")}><span className = 'fa fa-caret-up'></span></button></td>
                                            </tr>
                                            <tr>
                                                <td><button className = 'btn btn-secondary btn-sm' onClick = {(e) => this.decrementScore("home")}><span className = 'fa fa-caret-down'></span></button></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                                <th rowSpan = '2'>
                                    <span className={arrow} aria-hidden="true" style={{color: 'black'}}></span>{this.state.inning}
                                    <button className='btn btn-secondary btn-sm' style={{margin: '5px'}} onClick = {(e) => this.endhalf("last")}><span className = 'fa fa-caret-left'></span></button> 
                                    <button className='btn btn-secondary btn-sm' style={{margin: '5px'}} onClick = {(e) => this.endhalf("next")}><span className = 'fa fa-caret-right'></span></button>
                                </th>
                            </tr>
                            <tr>
                                <th>{this.state.away}</th>
                                <td>
                                    <table className = "hiddenTable">                                
                                        <tbody>
                                            <tr>
                                            <td rowSpan = '2'>{this.state.awayscore}</td>
                                            <td><button className='btn btn-secondary btn-sm' onClick = {(e) => this.incrementScore("away")}><span className = 'fa fa-caret-up'></span></button></td>
                                            </tr>
                                            <tr>
                                                <td><button className = 'btn btn-secondary btn-sm' onClick = {(e) => this.decrementScore("away")}><span className = 'fa fa-caret-down'></span></button></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                </div>
                <div className = "row">
                <div className = "col-sm-4 offset-sm-2">
                    <p>Out:  <span dangerouslySetInnerHTML={{__html: outs}}></span></p>
                </div>
                <div className = "col-sm-3">
                    <button className='btn btn-danger' onClick={(e) => this.addOut()}>Out!</button>
                </div>
                </div>
                <div className = "row">
                    <div className = "col-sm-12">
                        < UpcomingBatters entries={this.props.topOfOrder} nextBatter = {this.props.nextBatter} />
                    </div>
                </div>
                    <div className = "row">
                    <div className = "col-sm-12">
                    <table className="table table-bordered scoreTable">
                        <thead>
                            <tr>
                                <td></td>
                                <td>1</td>
                                <td>2</td>
                                <td>3</td>
                                <td>4</td>
                                <td>5</td>
                                <td>6</td>
                                <td>7</td>
                                <td>R</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Home</td>
                                <td>{this.state.scoreboard[0]}</td>
                                <td>{this.state.scoreboard[2]}</td>
                                <td>{this.state.scoreboard[4]}</td>
                                <td>{this.state.scoreboard[6]}</td>
                                <td>{this.state.scoreboard[8]}</td>
                                <td>{this.state.scoreboard[10]}</td>
                                <td>{this.state.scoreboard[12]}</td>
                                <td>{this.state.homescore}</td>
                            </tr>
                            <tr>
                                <td>Away</td>
                                <td>{this.state.scoreboard[1]}</td>
                                <td>{this.state.scoreboard[3]}</td>
                                <td>{this.state.scoreboard[5]}</td>
                                <td>{this.state.scoreboard[7]}</td>
                                <td>{this.state.scoreboard[9]}</td>
                                <td>{this.state.scoreboard[11]}</td>
                                <td>{this.state.scoreboard[13]}</td>
                                <td>{this.state.awayscore}</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Scoreboard