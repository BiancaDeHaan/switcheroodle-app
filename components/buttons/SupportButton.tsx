import React, { useState } from 'react';
import { SmallPopup } from '../SmallPopup';
import Image from 'next/image'

function SupportButton() {
    const emailAddress='biancadehaan77@gmail.com'
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [copied, setCopied] = useState<boolean>(false);
    function showInfoPopup() {
        setIsOpen(true);
    }

    function togglePopup() {
        setIsOpen(!isOpen);
    }

    function copyMailAddress() {
        navigator.clipboard.writeText(emailAddress);
        setCopied(true);
    }
    return (
        <span>
            <span className="right-button icon-size">
            <Image className="icon" height={30} width={30} src='/heart.png' alt="heart-img" onClick={showInfoPopup} />
            </span>
            {isOpen && <SmallPopup
                content={<>
                    <h2 className="popup-title"><b>Support</b></h2><div className="popup-text">
                    <hr className="bar" />
                    <p>If you have any suggestions, feel free to email at <a className="mail-link" onClick={copyMailAddress}>{emailAddress}</a></p>
                    {copied===true && 
                    <p>Email copied to clipboard!</p>}
                    </div>
                </>}
                handleClose={togglePopup}

            />}
        </span>
    )

}

export { SupportButton }