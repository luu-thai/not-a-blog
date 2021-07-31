import { Board } from './tic-tac-toe/board/board';
import { GameHistory } from './tic-tac-toe/history/gameHistory';
import './luu.css';

export function Luu(props) {
    console.log('Passed props', props)


    return (
        <div className="main">
            <div className="header">Header</div>
            <Board/>
            <GameHistory/>
            <div className="footer">Footer</div>
        </div>
    )
}

// TODO
// Phase 1 // DONE
// Need to manage the state of the game
// Need to add click management to all the buttons
// Determine win condition

// Phase 2 // 
// Also Second Player to Join. 
// Manage state across browsers 
// Remember Previous Games
