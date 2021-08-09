import './gameHistory.css';

export function GameHistory(props) {
    const { gameHistory } = props;
    return <div className="gameHistory">
        <p>Game History</p>
        {gameHistory.map(game => {
            console.log(game.boardState);
            return <p>{game.time} {game.winner} {game.boardState} </p>
        })}
    </div>; 
}