import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Expanse Records</title>
        <meta name="description" content="Explore 'The Expanse' Fan Website: Your ultimate destination for all things 'The Expanse' series." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Dimitri Avtenyev"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
         
          <h1>The expanse</h1>
         
        </div>
      </main>
    </>
  )
}
