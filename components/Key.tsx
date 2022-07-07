interface KeyProps {
    value: string;
    onClick: (value: string) => void
    isAlpha: boolean

}

function Key(props: KeyProps) {
    const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        props.onClick(props.value)
        event.currentTarget.blur()
    }

    return (
        <button className="keyboard-button isalpha" onClick={handleClick}>
                {props.value}
            </button>
    )

    
}

export { Key }

/*
{props.isAlpha === true ?
                <button className="keyboard-button isalpha" onClick={handleClick}>
                    {props.value}
                </button> :
                <button className="keyboad-button isnotalpha" onClick={handleClick}>
                    {props.value}
                </button>
            } 

            if (props.isAlpha === true) {
        return (
            <button className="keyboard-button isalpha" onClick={handleClick}>
                {props.value}
            </button>
        )
    } else {
        return (
            <button className="keyboad-button isalpha" onClick={handleClick}>
                {props.value}
            </button>
        )
    }

    */