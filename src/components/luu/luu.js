import { Board } from './tic-tac-toe/board/board';
import { GameHistory } from './tic-tac-toe/history/gameHistory';
import React, { useState } from 'react';
import './luu.css';

export function Luu(props) {
    console.log('Passed props', props)
    const [gameOver, setGameOver] = useState(false);
    const [gameHistory, setGameHistory] = useState([]);

    function handleGameWin(winner, boardState) {
        setGameHistory([{winner, boardState, time: Date.now()}, ...gameHistory]);
    }

    return (
        <div className="main">
            <div className="header">Header</div>
            <div className="body">
                <GameHistory gameHistory={gameHistory} />
                <Board
                    gameOver={gameOver}
                    setGameOver={setGameOver}
                    handleGameWin={handleGameWin}
                />
            </div>
            <div className="footer">Footer</div>
        </div>
    )
}
