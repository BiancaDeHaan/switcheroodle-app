import { Title } from './Title';
import { InfoButton } from './InfoButton';
import { StatButton } from './StatButton';
import { ThemeButton } from './ThemeButton';
import { SupportButton } from './SupportButton';

interface ShareProps {
  gameOver: boolean;
  average: number;
  moves: number;
}

function TopNav(props: ShareProps) {
  return (
    <div className="top-nav">
      <div className="top-nav-group">
        <InfoButton />
        <SupportButton />
      </div>
      <Title />
      <div className="top-nav-group">
        <ThemeButton />
        <StatButton gameOver={props.gameOver} moves={props.moves} average={props.average} />
      </div>
    </div>
  )
}

export { TopNav }