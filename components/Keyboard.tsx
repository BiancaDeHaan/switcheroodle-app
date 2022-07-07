import {Key} from './Key';

interface KeyboardProps {
    onChar: (value: string) => void;
    onDelete: () => void;
    onEnter: () => void;
}

function KeyBoard(props: KeyboardProps) {
    const onClick = (value: string) => {
        if (value === 'ENTER') {
          props.onEnter()
        } else if (value === 'DELETE') {
          props.onDelete()
        } else {
          props.onChar(value)
        }
      }

    return (
        <div className="keyboard keyboard-pos">
            <div>
                {['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'].map((key) => (
                    <Key
                        value={key}
                        key={key}
                        onClick={onClick}
                        width={40}
                    />
                ))}
            </div>
            <div className="second-row">
                {['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'].map((key) => (
                    <Key
                        value={key}
                        key={key}
                        onClick={onClick}
                        width={40}
                    />
                ))}
            </div>
            <div>
            <Key width={65.4} value="DELETE" onClick={onClick}/>
                {['Z', 'X', 'C', 'V', 'B', 'N', 'M'].map((key) => (
                    <Key
                        value={key}
                        key={key}
                        onClick={onClick}
                        width={40}
                    />
                ))}
                <Key width={65.4} value="ENTER" onClick={onClick} />
                    
            </div>
        </div>
    )
}
export { KeyBoard }