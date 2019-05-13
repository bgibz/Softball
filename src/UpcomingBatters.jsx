import React from 'react';

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
            atBat = '';
            onDeck = '';
            inHole = '';
        }
        

        return (
            <div>
                <ul className="upcoming">
                    <li>At Bat: {atBat}</li>
                    <li>On Deck: {onDeck}</li>
                    <li>In the Hole: {inHole}</li>
                </ul>
            </div>
        )
    }
}

export default UpcomingBatters;