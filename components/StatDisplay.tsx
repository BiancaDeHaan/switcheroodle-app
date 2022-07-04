import React, { useState, useEffect } from 'react';
import { ShareButton } from './ShareButton';

interface ShareProps {
    gameOver: boolean;
}

function StatDisplay(props: ShareProps) {
    const[totalGames, setTotalGames] = useState(() => {
        const saved = localStorage.getItem('number-wins');
        if(saved == null)
            return 0;
        else return JSON.parse(saved);
    })

    const[totalWins, setTotalWins] = useState(() => {
        const saved = localStorage.getItem('average');
        if(saved == null)
            return 0;
        else return JSON.parse(saved);
    })

    return (
        <div>
        <div className="stat">
            <p>Games
            Played <br/>
            {totalGames}</p>
        </div>
        <div className="stat">
            <p>Average 
            Moves <br/>
            {totalWins}</p>
    </div>
    <div>
        {
        <ShareButton gameOver={props.gameOver}/>
}
    </div>
        </div>
    )
}

export {StatDisplay}