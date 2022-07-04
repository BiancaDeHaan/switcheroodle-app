import React, { useState, useEffect } from 'react';
import {SmallPopup} from './SmallPopup';
import {StatDisplay} from './StatDisplay';
import Image from 'next/image'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

function StatButton() {
    const [isOpen, setIsOpen] = useState(false);
    function showInfoPopup() {
        setIsOpen(true);
    }

    function togglePopup() {
        setIsOpen(!isOpen);
    }

    return (
        <span>
            <Image className="icon" height={30} width={30} src='/stats.png' alt="stat-img" onClick={showInfoPopup} />
            {isOpen && <SmallPopup
                content={<>
                    <h2 className="popup-title"><b>Statistics</b></h2><div className="popup-text">
                        <StatDisplay />
                    </div>
                </>}
                handleClose={togglePopup}

            />}
        </span>
    )

}

export {StatButton}