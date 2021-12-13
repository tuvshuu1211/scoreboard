import React, {PureComponent} from "react";
import Counter from './Counter'

class Player extends PureComponent {
    render(){
        console.log(this.props.playerName + ' rendered')
        return(
            <div className="player">
                <span className="player-name">
                <button className="remove-player" onClick={()=> this.props.removePlayer(this.props.id)}>✖</button>
                    {this.props.playerName}
                </span>
                <Counter 
                    changeScore = {this.props.changeScore}
                    score={this.props.score}
                    index={this.props.index}
                />
            </div>
        )
    }
  }

  export default Player