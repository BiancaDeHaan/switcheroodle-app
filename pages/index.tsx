import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Game } from '../components/Game';


const Home: NextPage = () => {
  return (
    <div className={`${styles.container}`} >
      <Head>
        <title>Switcheroodle | Puzzle game</title>
        <meta name="description" content="A puzzle that is a twist on the classic Wordle. Swap letters to play and solve the puzzle!" />
        <meta name="robots" content="all" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Game/>
    </div>

  )
}

export default Home
