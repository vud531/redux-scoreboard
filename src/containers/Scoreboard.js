import React, { Component } from 'react';
import AddPlayerForm from '../components/AddPlayerForm';
import Player from '../components/Player';
import Header from '../components/Header';
const INITIAL_STATE = {
    players: [
        {
            name: 'Jim Hoskins',
            score: 31
        },
        {
            name: 'Andrew Chalkley',
            score: 20
        },
        {
            name: 'Alena Holligan',
            score: 50
        }
    ]
}
export default class Scoreboard extends Component {
    getInitialState = () => {
        return INITIAL_STATE;
    }

    constructor(){
        super();
        this.state = this.getInitialState();
    }

    onScoreChange = (index, delta) => {
        const players = this.state.players;
        players[index].score += delta;
        this.setState({ players: players });
    }

    onAddPlayer = name => {
        this.state.players.push({ name: name, score: 0 });
        this.setState(this.state);
    }

    onRemovePlayer = index => {
        this.state.players.splice(index, 1);
        this.setState(this.state)
    }
    render = () => {
        return (
            <div className="scoreboard">
                <Header players={this.state.players} />
                <div className="players">
                    {this.state.players.map((player, index) => {
                        return (
                            <Player
                            name={player.name} 
                            score={player.score}
                            key={player.name}
                            onScoreChange={(delta) => this.onScoreChange(index, delta)}
                            onRemove={() => this.onRemovePlayer(index)}
                            />
                        )
                    })}
                </div>
                <AddPlayerForm onAdd={this.onAddPlayer} />
            </div>
        )
    }
}
// const Scoreboard = props => {
//     const players =  [
//         {
//             name: 'Jim Hoskins',
//             score: 31
//         },
//         {
//             name: 'Andrew Chalkley',
//             score: 20
//         },
//         {
//             name: 'Alena Holligan',
//             score: 50
//         }
//     ]
//     return (
//         <div>
//             <Header players={players}/>
//             <AddPlayerForm />
//             <Player />
//         </div>
//     )
// }

// export default Scoreboard;