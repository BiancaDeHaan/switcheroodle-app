import { Title } from './Title';
import { InfoButton } from './buttons/InfoButton';
import { StatButton } from './buttons/StatButton';
import { ThemeButton } from './buttons/ThemeButton';
import { SupportButton } from './buttons/SupportButton';

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
        <StatButton gameOver={props.gameOver} moves={props.moves} average={props.average} />
      </div>
      <Title />
      <div className="top-nav-group">
        <ThemeButton />
        <SupportButton />
      </div>
    </div>
  )
}

export { TopNav }