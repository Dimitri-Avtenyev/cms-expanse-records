import Head from 'next/head'
import localFont from "next/font/local";
import styles from '@/styles/Home.module.css'
import Link from 'next/link';

export const protomoleculeFont = localFont({ src: "../fonts/Protomolecule.woff2" })
export const Home = () => {
  return (
    <>
      <Head>
        <title>Expanse Records</title>
        <meta name="description" content="Explore 'The Expanse' Fan Website: Your ultimate destination for all things 'The Expanse' series." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Dimitri Avtenyev" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <Link href={"/blog"}>
          <h1>Welcome Earther</h1>
          <p >Join us as we unravel the secrets of this complex and riveting world, where humanity's survival hinges on exploration, adaptation, and the eternal quest for knowledge."</p>
          <img src="./cover.jpeg" alt="cover"></img>
        </Link>
        <blockquote className={styles.quote}>
          <q>
            The thing about civilization is, it keeps you civil. Get rid of one; you can't count on the other.
          </q>
          <p>- Amos Burton (s05e06, “Tribes”)</p>
        </blockquote>
      </div>
    </>
  )
}

export default Home;