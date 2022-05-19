import Head from 'next/head'
import styles from 'styles/Home.module.scss'
import Left from '@components/Left/Left'
import Right from '@components/Right/Right'
import MobileMenu from '@components/Mobile/MobileMenu'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Adam Ryan Photography</title>
        <meta name="description" content="Adam Ryan Photography portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.innerContainer}>
          <MobileMenu />
          <Left />
          <Right />
        </div>
      </main>

        
    </div>
  )
}
