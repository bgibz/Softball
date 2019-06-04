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
            outs: 0
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
            this.setState((state) => {
                return { homescore: state.homescore + 1 }
            });
        } else{
            this.setState((state) => {
                return { awayscore: state.awayscore + 1 }
            });
        }
    }

    decrementScore(team) {
        if (team === "home") {
            this.setState((state) => {
                return { homescore: state.homescore - 1 }
            });
        } else{
            this.setState((state) => {
                return { awayscore: state.awayscore - 1 }
            });
        }
    }

    addOut() {
        if (this.state.outs >= 2){
            this.endhalf();
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
            <div className = "container">
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
                                            <td><button className='btn btn-secondary' onClick = {(e) => this.incrementScore("home")}><span className = 'fa fa-caret-up'></span></button></td>
                                            </tr>
                                            <tr>
                                                <td><button className = 'btn btn-secondary' onClick = {(e) => this.decrementScore("home")}><span className = 'fa fa-caret-down'></span></button></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                                <th rowSpan = '2'>
                                    <span className={arrow} aria-hidden="true" style={{color: 'black'}}></span>{this.state.inning}
                                    <button className='btn btn-secondary tableButton' onClick = {(e) => this.endhalf("last")}><span className = 'fa fa-caret-left'></span></button> 
                                    <button className='btn btn-secondary tableButton' onClick = {(e) => this.endhalf("next")}><span className = 'fa fa-caret-right'></span></button>
                                </th>
                            </tr>
                            <tr>
                                <th>{this.state.away}</th>
                                <td>
                                    <table className = "hiddenTable">                                
                                        <tbody>
                                            <tr>
                                            <td rowSpan = '2'>{this.state.awayscore}</td>
                                            <td><button className='btn btn-secondary' onClick = {(e) => this.incrementScore("away")}><span className = 'fa fa-caret-up'></span></button></td>
                                            </tr>
                                            <tr>
                                                <td><button className = 'btn btn-secondary' onClick = {(e) => this.decrementScore("away")}><span className = 'fa fa-caret-down'></span></button></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-md-12">
                    <p>Out:  <span dangerouslySetInnerHTML={{__html: outs}}></span></p>
                    <br></br>
                    <table className = "hiddenTable">
                        <tbody>
                            <tr>
                                <td><buttton className='btn btn-danger' onClick={(e) => this.addOut()}>Out!</buttton></td> 
                            </tr>
                        </tbody>
                    </table>
                    <button onClick={(e) => this.props.nextBatter()}>Next Batter</button>
                </div>
                </div>
                <div className = "row">
                    <div className = "col-md-12">
                        < UpcomingBatters entries={this.props.topOfOrder} />
                    </div>
                </div>
                </div>
            </div>
        );
    }

}

export default Scoreboard