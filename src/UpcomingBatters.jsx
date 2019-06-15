import React from 'react';
import './Scoreboard.css';

class UpcomingBatters extends React.Component {

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
                        <td><span><button className='btn btn-light btn-sm' onClick={(e) => this.props.nextBatter()}>Next Batter</button></span></td>
                        <td colSpan = '2'>At Bat </td>
                        <td colSpan = '2'>On Deck</td>
                        <td colSpan = '2'>In The Hole</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td colSpan = '2'> {atBat}</td>
                        <td colSpan = '2'> {onDeck}</td>
                        <td colSpan = '2'> {inHole}</td>
                    </tr>
                </tbody>
            </table>
            </div>
        )
    }
}

export default UpcomingBatters;