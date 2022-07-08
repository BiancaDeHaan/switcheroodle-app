import Image from 'next/image'

interface DeleteProps {
    onClick: () => void
}

function DeleteButton(props: DeleteProps) {
    return (
        <span>
        <span className="icon-size">
        <Image className="icon" height={30} width={30} src='/del2.png' alt="del-img" onClick={props.onClick} />
        </span>
        </span>

    )
}

export {DeleteButton}