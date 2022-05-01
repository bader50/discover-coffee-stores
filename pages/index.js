import Head from "next/head";
import styles from "../styles/Home.module.css";
import Banner from "./../components/banner";
import Image from "next/image";

export default function Home() {
  const handleClick = (e) => {
    console.log("hi click");
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Coffe Connoisseur</title>
        <meta name="description" content="Discover you local coffee shops!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.heroImage}>
          <Image src="/static/hero-image.png" width={361} height={396} />
        </div>
        <div>
          <Banner handleClick={handleClick} />
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
