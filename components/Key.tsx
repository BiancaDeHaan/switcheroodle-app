interface KeyProps {
    value: string;
    onClick: (value: string) => void
    width: number

}

function Key(props: KeyProps) {
    const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        props.onClick(props.value)
        event.currentTarget.blur()
    }

    return (
        <button className="keyboard-button" onClick={handleClick}>
            {props.value}
        </button>
    )
}

export { Key }