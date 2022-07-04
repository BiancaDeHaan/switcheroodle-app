import {Word} from './Word';


interface GoalProps {
    goal : string;
}

function GoalWord(props : GoalProps) {
    return (
        <div>
            <h3 className="header">Goal:</h3>
            <Word word={props.goal}/>
        </div>
    )
}

export {GoalWord}
