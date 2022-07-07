import Image from 'next/image'

interface DeleteProps {
    onClick: () => void
}

function DeleteButton(props: DeleteProps) {
    return (
        <span className="icon-size delete-button">
        <Image className="icon" height={30} width={30} src='/del.png' alt="del-img" onClick={props.onClick} />
        </span>

    )
}

export {DeleteButton}