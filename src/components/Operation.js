import React, { Component } from 'react';

class Operation extends Component{

handleForm(e){
    e.preventDefault()
    this.props.setPlayer(e.target.player.value)

}

render(){
    return(!this.props.getPlayer ?   
            <form onSubmit={(e) => this.handleForm(e)}>
                <label>
                    Player x
                    <input type="radio" name="player" value="x"/>
                </label>
                <label>
                    Player 0
                    <input type="radio" name="player" value="0"/>
                </label>
                <input type="submit" value="Start" />
            </form>
        :  ''
    )
}
}

export default Operation;


