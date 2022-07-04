interface PopupInfo {
    handleClose: () => void;
    content: React.ReactNode;
}

function SmallPopup(props:PopupInfo) {
    return (
    <div className="small-popup-box">
      <div className="small-box">
        <div className="small-close-icon" onClick={props.handleClose}>X</div>
        {props.content}
      </div>
    </div>
    )
  }

  export {SmallPopup}