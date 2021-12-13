import React from 'react'
import '../App.css';
import Header from './Header';
import Player from './Player'
import AddPlayerForm from './AddPlayerFrom';

class App extends React.Component {

  state = {
      players: [
          {
              name: 'Enkhtuvshin',
              score: 0,
              id: 1
          },
          {
              name: 'BAATARKHUU',
              score: 0,
              id: 2
          },
          {
              name: 'ANGARAG',
              score: 0,
              id: 3
          },
          {
              name: 'TUVSHINBAT',
              score: 0,
              id: 4
          },
          {
              name: 'AMARSANAA',
              score: 0,
              id: 5
          }
      ]
  }
  // players las id
  prevPlayerId = 5

  handleRemovePlayer = (id) => {
      this.setState(prevState => ({
          players: prevState.players.filter(f => f.id !== id)
      }))
  }

  handleScoreChange = (index, num) =>{
      // this.setState( prevState => ({
      //     score: prevState.players[index].score += num
      // }))
      // console.log('index:' + index, 'number:' +num)

      this.setState( prevState => {
        // New players array - a copy of previous players state
        const updatedPlayers = [...prevState.players];
        // A copy of the player object we're targeting
        const updatedPlayer = {...updatedPlayers[index]};
        // update the target player's score
        updatedPlayer.score += num;
        // Update the players array with the target player's latest score
        updatedPlayers[index] = updatedPlayer

        // Update the players state without mutating the original state
        return{
          players: updatedPlayers
        };
      });
  }

  handleAppPlayer = (name) =>{
    this.setState({
      players: [
        ...this.state.players,
        {
          name: name,
          score: 0,
          id: this.prevPlayerId += 1
        }
      ]
    })
  }

  render(){
      return(
          <div className="scoreboard">
              <Header 
                  title="Scoreboard" 
                  totalPlayers={this.state.players} />
  
                  {/* Player list */}
                  {this.state.players.map( (player, index) =>
                      <Player 
                          playerName= {player.name} 
                          key={player.id.toString()}
                          id = {player.id}
                          score = {player.score}
                          index = {index}
                          removePlayer = {this.handleRemovePlayer}
                          changeScore = {this.handleScoreChange}
                           />
                      )}
                      <AddPlayerForm addPlayer={this.handleAppPlayer} />
          </div>
      )

  }
}

export default App;
