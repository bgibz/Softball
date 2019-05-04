import React from 'react';
import './Scoreboard.css';

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
                return { half: "bottom"}
            });
        } else{
            this.setState((state) => {
                return { half: "top",
                inning: state.inning + 1 }
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
        if (this.state.outs === 2){
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

    render() {
        var arrow = 'glyphicon glyphicon-chevron-up'
        if (this.state.half === "bottom")
            arrow = 'glyphicon glyphicon-chevron-down'
        return (
            <div>
            <table className = "greenTable">
            <tbody>
                <tr>
                    <th>{this.state.home}</th>
                    <td>{this.state.homescore}</td>
                    <td rowSpan = '2'><span className={arrow} aria-hidden="true" ></span>{this.state.inning}</td>
                </tr>
                
                <tr>
                    <th>{this.state.away}</th>
                    <td>{this.state.awayscore}</td>
                </tr>
            </tbody>
            </table>
            <p>Outs: {this.state.outs}</p>
            <br></br>
            <button onClick={(e) => this.endhalf()} >End half inning </button>
            <br/>
            <button onClick={(e) => this.incrementScore()}>Add a run</button>
            <br/>
            <button onClick={(e) => this.addOut()}>Out!</button>
            </div>
        );
    }

}

export default Scoreboard