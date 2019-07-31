const initialState = {
    board: Array(9).fill(),
    player: null
};

const reducer = (state = initialState, action) => {
    // newState a copy of the state 
    const newState = {...state};

    switch(action.type){

        case 'SET_DATA': {
            newState.board = action.payload.board;
            newState.player = action.payload.player
        break
        }

        case 'CLEAR_DATA': {
            newState.board = Array(9).fill();
            newState.player = null
        break
        }
    }

    return newState
}

export default reducer;