import React, { useState, useEffect } from 'react';
import { ShareButton } from './buttons/ShareButton';

interface ShareProps {
    gameOver: boolean;
    average: number;
    moves: number;
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
        <ShareButton gameOver={props.gameOver} moves={props.moves} average={props.average}/>
}
    </div>
        </div>
    )
}

export {StatDisplay}