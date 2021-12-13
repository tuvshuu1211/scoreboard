import React from "react";
import Stats from './Stats'
import Stopwatch from "./Stopwatch";

class Header extends React.Component{
    render(){
        const { title, totalPlayers} = this.props
        return(
            <header>
                <Stats players = {totalPlayers} />
                <h1>{title}</h1>
                <Stopwatch />
            </header>
        )
    }
  }
  export default Header