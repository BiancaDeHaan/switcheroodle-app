import {Title} from './Title';
import {InfoButton} from './InfoButton';
import {StatButton} from './StatButton';

function TopNav() {
    return (
        <div className="top-nav">
            <div >
              <InfoButton />
            </div>
            <Title />
            <div >
              <StatButton />
            </div>
        </div>
      )
}

export {TopNav}