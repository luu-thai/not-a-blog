import React, { useEffect, useState } from 'react';

export function Luu(props) {
    const [state, setState] = useState(false);

    
    useEffect(() => {
        console.log('use effect', state)        
    },
    [state]);

    console.count(`rendering`)
    function handle() {
        setState(!state)
    }

    return (
        <div>
            <p> { state ? "YOLO" : "This is Luu's Page" } </p>
            <button onClick={() => handle()}> Click ME </button>
        </div>
    )
}
