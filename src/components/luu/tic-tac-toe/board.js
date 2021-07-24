import './board.css';
import React, { useEffect, useState } from 'react';

const buttons = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
]
const states = {
    empty: '',
    playerOne: 'O',
    playerTwo: 'X'
}
const defaultBoardState = [states.empty, states.empty, states.empty, states.empty, states.empty, states.empty, states.empty, states.empty, states.empty];

export function Board() {
    const [turn, setTurn] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [boardState, setBoardState] = useState([...defaultBoardState]);
    const [winningCondition, setWinningCondition] = useState([]);

    useEffect(() => {
        const playerOneWins = calculateWin(states.playerOne)
        const playerTwoWins = calculateWin(states.playerTwo)

        if (playerOneWins) setWinningCondition(playerOneWins);
        if (playerTwoWins) setWinningCondition(playerTwoWins);

        if (playerTwoWins || playerOneWins) setGameOver(true);
    }, [turn]
    );

    function calculateWin(playerSymbol) {
        const playerPositions = [];
        boardState.forEach((value, index) => value === playerSymbol ? playerPositions.push(index) : -1);
        return winConditions.find(condition => condition.every(position => playerPositions.includes(position)));;
    }

    function reset() {
        setBoardState([...defaultBoardState]);
        setTurn(0);
        setGameOver(false);
    }

    function draw(index) {
        if (gameOver || boardState[index] !== states.empty) {
            return;
        }

        boardState[index] = turn ? states.playerOne : states.playerTwo;
        setBoardState(boardState);
        setTurn(turn ? 0 : 1);
    }

    return (
        <div>
            <div className='board'>
                {
                    buttons.map((buttonIndex) =>
                        <div 
                            onClick={() => draw(buttonIndex)} 
                            className={`boardSpace ${gameOver && winningCondition.includes(buttonIndex) ? 'win' : ''}`}
                        >
                            {boardState[buttonIndex]}    
                        </div>
                    )
                }
            </div>
            <button className='resetButton' style={{ width: "325px" }} onClick={() => reset()}> One More Again </button>
        </div>
    )
}
