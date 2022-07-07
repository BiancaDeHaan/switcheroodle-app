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
            <div className="keyboard-row">
                {['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'].map((key) => (
                    <Key
                        value={key}
                        key={key}
                        onClick={onClick}
                        isAlpha={true}
                    />
                ))}
            </div>
            <div className="second-row keyboard-row">
                {['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'].map((key) => (
                    <Key
                        value={key}
                        key={key}
                        onClick={onClick}
                        isAlpha={true}
                    />
                ))}
            </div>
            <div className="keyboard-row">
            <Key isAlpha={false} value="DEL" onClick={onClick}/>
                {['Z', 'X', 'C', 'V', 'B', 'N', 'M'].map((key) => (
                    <Key
                        value={key}
                        key={key}
                        onClick={onClick}
                        isAlpha={true}
                    />
                ))}
                <Key isAlpha={false} value="ENTER" onClick={onClick} />
                    
            </div>
        </div>
    )
}
export { KeyBoard }