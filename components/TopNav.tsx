import {Title} from './Title';
import {InfoButton} from './InfoButton';
import {StatButton} from './StatButton';

interface ShareProps {
  gameOver: boolean;
}

function TopNav(props: ShareProps) {
    return (
        <div className="top-nav">
            <div >
              <InfoButton />
            </div>
            <Title />
            <div >
              <StatButton gameOver={props.gameOver}/>
            </div>
        </div>
      )
}

export {TopNav}