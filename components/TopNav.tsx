import {Title} from './Title';
import {InfoButton} from './InfoButton';
import {StatButton} from './StatButton';

interface ShareProps {
  gameOver: boolean;
  average: number;
  moves: number;
}

function TopNav(props: ShareProps) {
    return (
        <div className="top-nav">
            <div >
              <InfoButton />
            </div>
            <Title />
            <div >
              <StatButton gameOver={props.gameOver} moves={props.moves} average={props.average}/>
            </div>
        </div>
      )
}

export {TopNav}