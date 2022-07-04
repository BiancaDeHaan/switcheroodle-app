interface WordProp {
    word : string
}

function Word(props: WordProp) {
    
    return (
        <div className="letter-row">
            <div className="letter-box">{props.word.charAt(0)}</div>
            <div className="letter-box">{props.word.charAt(1)}</div>
            <div className="letter-box">{props.word.charAt(2)}</div>
            <div className="letter-box">{props.word.charAt(3)}</div>
            <div className="letter-box">{props.word.charAt(4)}</div>
        </div>
    )
}

export {Word}