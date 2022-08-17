import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from './component/layout'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Football Lineup Builder</title>
        <meta name="description" content="Football Lineup" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Layout>
          aaa
        </Layout>
      </main>

      <footer className={styles.footer}>
          Powered by{'@irfanshamid'}
      </footer>
    </div>
  )
}
