import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import { App } from '../components/App';


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Just Another Wordle Clone</title>
        <meta name="description" content="A twist on the class Wordle" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <App/>
    </div>

  )
}

/*
export async function getServerSideProps() {
  const postsResponse = await fetch(process.env.BASE_URL + '/api/word');
  const postsData = await postsResponse.json();

  return {
    props: {
      posts: postsData
    }
  }
}*/

export default Home
