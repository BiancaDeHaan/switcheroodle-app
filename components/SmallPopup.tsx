import React , {useEffect, useRef} from 'react';


interface PopupInfo {
    handleClose: () => void;
    content: React.ReactNode;
}

function SmallPopup(props:PopupInfo) {
  const ref = useRef<any>(null);

  function outsideClick(event : MouseEvent) {
    if (ref.current && !ref.current.contains(event.target)) {
      props.handleClose();
  }
  }

  useEffect(() => {
    document.addEventListener('click', outsideClick, true);
    return () => {
        document.removeEventListener('click', outsideClick, true);
    };
}, []);

    return (
    <div className="small-popup-box">
      <div ref={ref} className="small-box">
        <div className="small-close-icon" onClick={props.handleClose}>x</div>
        {props.content}
      </div>
    </div>
    )
  }

  export {SmallPopup}