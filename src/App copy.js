import React, { Component } from 'react';
import './App.css';
import Status from './components/Status';


// State 

// 1) Board 
// 2) Player 
// 3) Winner 


// functions

// 1) - Create the Board, allow the board to be displayed to the screen 

// 2) - handle the event when the box is clicked 

// 2.1) - Allow the players to be changed.. 

// 3) - Check function to take place, every time an event is triggered, check if there is a winner 

// 4) Reset Option 



// Render

// Child Component - Status 

// 1) Pass the right props to Status 

// 2) Call the function that allows the boxes to be rendered to the screen 

// 3) The reset button is disabled once the game has started and there is no winner

// 4) The reset button is enabled once the game is complete or if there is a winner 



class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      board: Array(9).fill(),
      player: 'x',
      winner: null
    }

   
   
  }

      
  winningMoves =   [
                      ["0", "1", "2"],
                      ["3", "4", "5"],
                      ["6", "7", "8"],
                      ["0", "3", "6"],
                      ["1", "4", "7"], 
                      ["2", "5", "8"],
                      ["0", "4", "8"],
                      ["2", "4", "6"]      
        ]

  handleClick(index){

    let item = this.state.board[index]
    if(!item){
      item = this.state.player
      this.state.board[index] = item
      const played = [];
      

      for(let i=0; i<this.state.board.length; i++){
        if(item === this.state.board[i]){
          played.push(i)
        }
      }

      let winner = true;

      for(let j =0; j<this.winningMoves.length; j++){
        const move = this.winningMoves[j];
        winner = true;
        for(let k=0; k<move.length; k++){
          if(!played.includes(parseInt(move[k]))){
            winner = false
            break;
          }   
        }

        if(winner){
          this.setState({
            winner: this.state.player
          })
        }

      }

      this.setState({
        board: this.state.board,
        player: this.state.player === 'x' ? '0' : 'x'
        
      })
    }
  }

  createBoard(){
    return(
    this.state.board.map((box, index) => (
      <div className="box" key={index} onClick={() => this.handleClick(index)}>
        {box}
      </div>
    ))
    )
  }

  render(){
  return (

    <div className="container">
      <h1>Tic Tac Toe App</h1>
      
       {/* <Status 
        
        /> */}

      <div className="board">

      {/* Board code goes here   */}

      

      </div>

      {/* Button code goes here  */}
    </div>
  );
}
}

export default App;
