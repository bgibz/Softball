import React from 'react';
import './Scoreboard.css';

class UpcomingBatters extends React.Component {
    constructor(props) {
        super(props);
    }

    createPlayers(item) {
        return <li key={item.key} className={item.gender}>{item.name}</li>
    }

    render() {
        var batters = this.props.entries;
        if (batters.length > 2){
            var atBat = batters[0].name;
        var onDeck = batters[1].name;
        var inHole = batters[2].name;
        } else {
            atBat = '-';
            onDeck = '-';
            inHole = '-';
        }
        
        return (
            <div>
            <table className = "table table-dark">
                <tbody>
                    <tr>
                        <td>At Bat <span><button className='btn btn-primary btn-sm' onClick={(e) => this.props.nextBatter()}>Next Batter</button></span></td>
                        <td>On Deck</td>
                        <td>In The Hole</td>
                    </tr>
                    <tr>
                        <td> {atBat}</td>
                        <td> {onDeck}</td>
                        <td> {inHole}</td>
                    </tr>
                </tbody>
            </table>
            </div>
        )
    }
}

export default UpcomingBatters;