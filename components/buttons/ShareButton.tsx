import React, { useState } from 'react';
import copy from "copy-to-clipboard"; 

interface ShareProps {
    gameOver: boolean;
    average: number;
    moves: number;
}

function ShareButton(props: ShareProps) {
    const [clicked, setClicked] = useState<boolean>(false);

    function copyShareText() {
        setClicked(true);
        copy('I did todays Switcheroodle in ' + props.moves + ' moves. My average is ' + props.average + ' moves. Try and beat me at https://www.switcheroodle.com/')
    }

    return (
        <div>
            <button className="share-button" onClick={copyShareText}>
                <span className="share-text">Share</span>
                <img className="share-img" height={40} width={40} src='/sharing.png' alt="share-img" />
            </button>
            {clicked && 
            <div>Text copied to clipboard!</div>}
        </div>
    )

}

export { ShareButton }