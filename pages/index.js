import Head from 'next/head'
import styles from '../styles/Home.module.css'
// import fetch from 'node-fetch';
import Image from './components/atoms/Image';

export default function Home() {
  return (
    <>
      <Head>
        <title>Lazy-loading images using Intersection observer</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
      </Head>
      <div className={styles.container}>
      

      <main className={styles.main}>
        <h1 className={styles.title}>
          Lazy-loading images using Intersection observer.
        </h1>
        <ul>
          {
              Array.from(new Array(15)).map((_, index) => {
                return(
                  <li key={index}>
                    <Image srcUrl={`/images/image_${index}.png`} />
                  </li>
                )
            })
          }
        </ul>
      </main>
    </div>
    </>
  )
}

//Called at server side
// export async function getStaticProps() {
//   const response = await fetch('https://fakerapi.it/api/v1/images?_quantity=16&_width=480&_type=pokemon');
//   const data = await response.json();
//   return {
//     props: {
//       data: data.data
//     }
//   }
// }