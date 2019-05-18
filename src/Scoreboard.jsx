import React from 'react';
import './Scoreboard.css';
import UpcomingBatters from './UpcomingBatters.jsx';
import field_default from './images/field_default.png';

class Scoreboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inning: 1,
            half: 'top',
            homescore: 0,
            awayscore: 0,
            home: 'DMAG',
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
    endhalf() {
        if (this.state.half === "top") {
            this.setState((state) => {
                return { half: "bottom",
            outs: 0}
            });
        } else{
            this.setState((state) => {
                return { half: "top",
                inning: state.inning + 1,
                outs: 0 }
            });
        }
    }

    incrementScore() {
        if (this.state.half === "top") {
            this.setState((state) => {
                return { homescore: state.homescore + 1 }
            });
        } else{
            this.setState((state) => {
                return { awayscore: state.awayscore + 1 }
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
                <div className = "col-md-6">
                    <table className = "greenTable">
                        <tbody>
                            <tr>
                                <th>{this.state.home}</th>
                                <td>{this.state.homescore}</td>
                                <td rowSpan = '2'><span className={arrow} aria-hidden="true" style={{color: 'purple'}}></span>{this.state.inning}</td>
                            </tr>
                            
                            <tr>
                                <th>{this.state.away}</th>
                                <td>{this.state.awayscore}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-md-6">
                    <img className="img-responsive fieldmap" src={field_default}></img>
                    <p>Out:  <span dangerouslySetInnerHTML={{__html: outs}}></span></p>
                    <br></br>
                    <button onClick={(e) => this.endhalf()} >End half inning </button>
                    <br/>
                    <button onClick={(e) => this.incrementScore()}>Add a run</button>
                    <br/>
                    <button onClick={(e) => this.addOut()}>Out!</button>
                    <br/>
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