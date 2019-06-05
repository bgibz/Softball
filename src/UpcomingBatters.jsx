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
            atBat = ' ';
            onDeck = ' ';
            inHole = ' ';
        }
        
        return (
            <div className = "table table-dark">
            <table>
                <thead>
                    <tr>
                        <th>At Bat</th>
                        <th>On Deck</th>
                        <th>In The Hole</th>
                    </tr>
                </thead>
                <tbody>
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