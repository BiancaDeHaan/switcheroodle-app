import {Word} from './Word';

interface CurrentProps {
    current: string;
}

function CurrentWord(props: CurrentProps) {
    
    return (
        <div>
            <h3 className="header">Current Word:</h3>
            <Word word={props.current}/>
        </div>
    )
}

export {CurrentWord}