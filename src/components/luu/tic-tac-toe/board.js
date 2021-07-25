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
    const [turn, setTurn] = useState(states.playerOne);
    const [gameOver, setGameOver] = useState(false);
    const [boardState, setBoardState] = useState([...defaultBoardState]);
    const [winningCondition, setWinningCondition] = useState([]);
    const [gameResults, setGameResults] = useState([]);

    useEffect(() => {
        const playerOneWins = calculateWin(states.playerOne)
        const playerTwoWins = calculateWin(states.playerTwo)

        if (playerOneWins) {
            setWinningCondition(playerOneWins);
            setGameResults([states.playerOne, ...gameResults]);
        }

        if (playerTwoWins) {
            setWinningCondition(playerTwoWins);
            setGameResults([states.playerTwo, ...gameResults]);
        }
        if (playerTwoWins || playerOneWins) setGameOver(true);
        if (boardState.every(position => position !== states.empty)) setGameOver(true);
    }, [turn]
    );

    useEffect(() => {
        if(gameOver) console.log(gameResults);
    });

    function calculateWin(playerSymbol) {
        const playerPositions = [];
        boardState.forEach((value, index) => value === playerSymbol ? playerPositions.push(index) : -1);
        return winConditions.find(condition => condition.every(position => playerPositions.includes(position)));;
    }

    function reset() {
        setBoardState([...defaultBoardState]);
        setTurn(states.playerOne);
        setWinningCondition([]);
        setGameOver(false);
    }

    function draw(index) {
        if (!gameOver && boardState[index] === states.empty) {
            boardState[index] = turn;
            setTurn(turn === states.playerOne ? states.playerTwo : states.playerOne);
            setBoardState(boardState);
        }
    }

    return (
        <div>
            <div className='board'>
                {
                    buttons.map((buttonIndex) =>
                        <div
                            onClick={() => draw(buttonIndex)}
                            className={
                                'boardSpace' + 
                                ` ${gameOver && winningCondition.length === 0 ? 'fail' : ''}` + 
                                ` ${gameOver && winningCondition.includes(buttonIndex) ? 'win' : ''}` + 
                                ` ${boardState[buttonIndex] === states.empty && !gameOver ? 'selectable' : ''}`
                            }
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
