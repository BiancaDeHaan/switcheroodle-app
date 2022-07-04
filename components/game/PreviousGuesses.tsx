import { Word } from './Word';

interface Guesses {
    guesses: string[]
}

function PreviousGuesses(props: Guesses) {
    const listItems = props.guesses.map((guess, index) =>
        <Word word={guess} key={index}/>
    );

    return (
        <div>
            {props.guesses.length > 0 && <div>
            <h3 className="header">History</h3>
            <div>{listItems}</div>
            </div> }
            
        </div>
    )
}

export { PreviousGuesses }