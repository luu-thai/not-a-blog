import React, { useEffect, useState } from 'react';
import { Board } from './tic-tac-toe/board';
import './luu.css';

export function Luu(props) {
    const [state, setState] = useState(false);


    useEffect(() => {
        console.log('use effect', state)
    }, [state]);

    console.count(`rendering`)
    function handle() {
        setState(!state)
    }

    return (
        <div className="main">
            <Board></Board>
            <button style={{ width: "325px" }} onClick={() => handle()}> Click ME </button>
        </div>
    )
}
