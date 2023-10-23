import Head from 'next/head'
import localFont from "next/font/local";
import styles from '@/styles/Home.module.css'

export const protomoleculeFont = localFont({src: "../fonts/Protomolecule.woff2"})
export const Home = () => {
  return (
    <>
      <Head>
        <title>Expanse Records</title>
        <meta name="description" content="Explore 'The Expanse' Fan Website: Your ultimate destination for all things 'The Expanse' series." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Dimitri Avtenyev"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className={styles.container}>
          <p >Join us as we unravel the secrets of this complex and riveting world, where humanity's survival hinges on exploration, adaptation, and the eternal quest for knowledge."</p>
          <img src="./cover.jpeg" alt="cover"></img>
        </div>
    </>
  )
}

export default Home;