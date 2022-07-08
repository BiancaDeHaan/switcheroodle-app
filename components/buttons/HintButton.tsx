import React, { useState } from 'react';
import { SmallPopup } from '../SmallPopup';
import Image from 'next/image'

type HintProps = {
    words: string[];
    current: string
}

function HintButton(props: HintProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [index, setIndex] = useState<number>(0);
    const [hint, setHint] = useState<string>("");
    const [hintsList, setHintsList] = useState<string[]>([]);

    function showInfoPopup() {
        setIsOpen(true);
        setHint(getHint());
    }

    function togglePopup() {
        setIsOpen(!isOpen);
    }

    function getHint() {
        var hints: string[] = [];
        for (var i = 0; i < props.words.length; i++) {
            if (letterDifference(props.current, props.words[i]))
                hints.push(props.words[i]);
        }
        setHintsList(hints);
        var tempIndex = index + 1;
        if (tempIndex + 1 > hints.length)
            tempIndex = 0;

        var hint = hints[tempIndex];
        setIndex(tempIndex);
        return hint;
    }

    function letterDifference(word1: string, word2: string) {
        var count = 0;
        for (var i = 0; i < 5; i++) {
            if (word1[i] === word2[i])
                count++;
        }
        if (count === 4) return true;
        else return false;
    }

    function cycleHint() {
        var tempIndex = index + 1;
        if (tempIndex + 1 > hintsList.length)
            tempIndex = 0;
        var hint = hintsList[tempIndex];
        setIndex(tempIndex);
        setHint(hint);
    }

    return (
        <span> <span className="icon-size">
            <Image className="icon" height={30} width={30} src='/hint.png' alt="hint-img" onClick={showInfoPopup} />
        </span>
            <div>
                {isOpen && <SmallPopup
                    content={<>
                        <h2 className="popup-title"><b>Hint!</b></h2>
                        <div className="popup-text">
                            <p>No worries, everyone needs a hint sometimes! :) </p>
                            <p className="capital">{hint}</p>
                        </div>
                        <button className="share-button" onClick={cycleHint}>
                            <span className="share-text">Cycle Hint</span>
                        </button>
                    </>}
                    handleClose={togglePopup}


                />}
            </div>
        </span>
    )
}

export { HintButton }