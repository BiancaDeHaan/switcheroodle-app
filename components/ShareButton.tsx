import React, { useState, useEffect } from 'react';
import copy from "copy-to-clipboard"; 

interface ShareProps {
    gameOver: boolean;
    moves : number;
    average : number;
}

function ShareButton(props: ShareProps) {

    function copyShareText() {
        copy('I did todays Switcheroodle in')
    }

    return (
        <div>
            <button className="share-button" onClick={copyShareText}>
                <span className="share-text">Share</span>
                <img className="share-img" height={40} width={40} src='/sharing.png' alt="share-img" />
            </button>
        </div>
    )

}

export { ShareButton }