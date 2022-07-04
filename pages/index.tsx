import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import { Game } from '../components/Game';


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Switcheroodle</title>
        <meta name="description" content="A twist on the class Wordle" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Game/>
    </div>

  )
}

export default Home
