import Head from 'next/head';
import Header from '@/components/header';
import Locations from '@/components/locations';
import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Weather Forecast & Traffic Cam Website</title>
        <meta name="description" content="Weather Forecast & Traffic Cam Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <h1>Weather Forecast & Traffic Cam Website</h1>
        <Header />
        <Locations />
        <div className={styles.assumptions}>
          <h2>Assumptions</h2>
          <p>The traffic API has data from 2016-03-01</p>
          <p>Not required to expand images</p>
          <p>Location name can be obtained by calculating the minimal distance from a camera to the center of all the Singapore states provided by the weather API</p>
          <p>Distance calculation does not take into consideration slopes or hills</p>
        </div>
      </main>
    </>
  );
};
