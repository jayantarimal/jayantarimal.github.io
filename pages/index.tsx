import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jayanta Rimal - Under Construction</title>
        <meta name="description" content="Your Portfolio - Under Construction" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Under Construction</h1>
        <p className={styles.description}>
          This website is currently under construction. Please check back later.
        </p>
      </main>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Jayanta Rimal</p>
      </footer>
    </div>
  );
};

export default Home;