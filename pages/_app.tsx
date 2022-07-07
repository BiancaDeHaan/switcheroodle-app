import '../styles/globals.css'
import '../styles/top-nav.css';
import '../styles/game.css';
import '../styles/word.css';
import '../styles/popup.css';
import '../styles/keyboard.css';
import '../styles/themes.css';

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps}/>
}

export default MyApp
