import React, { useState, useEffect } from 'react';
import {SmallPopup} from './SmallPopup';
import Image from 'next/image'

function InfoButton() {
    const [isOpen, setIsOpen] = useState(false);
    function showInfoPopup() {
        setIsOpen(true);
    }

    function togglePopup() {
        setIsOpen(!isOpen);
    }

    return (
        <span>
            <Image className="icon" height={30} width={30} src='/info.png' alt="stat-img" onClick={showInfoPopup} />
            {isOpen && <SmallPopup
                content={<>
                    <h2 className="popup-title"><b>About</b></h2>
                    <div className="popup-text">
                        <p>A respectful homeage to <a className="popup-links-text" href="https://www.nytimes.com/games/wordle/index.html">Wordle</a> and
                            Worlde-like clones, such as <a className="popup-links-text" href="https://www.heardle.app/">Heardle</a>.</p>
                        <p>Each day, we pick two random words. The goal is to shift the first word into the second, one letter at a time.</p>
                        <p>The intermediate words have to be valid words, 5 letters long, and only one letter different.</p>
                        <p>Note: Still in development!</p>
                        <p>Good luck!</p>
                    </div>
                </>}
                handleClose={togglePopup}

            />}
        </span>
    )
    
}

export {InfoButton}