import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>DGMall Syariah Help Center</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/LogoDgmall.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>DGMall Syariah Help Center</h1>

        <p className={styles.description}>Temukan Topik Kendalamu.</p>

        <div className={styles.grid}>
          <a href="./pembeli" className={styles.card}>
            <h2>Pembeli &rarr;</h2>
            <p>Temukan Topik Kendalamu di Sini</p>
          </a>

          <a href="./penjual" className={styles.card}>
            <h2>Penjual &rarr;</h2>
            <p>Temukan Topik Kendalamu di Sini</p>
          </a>

          <a href="" className={styles.card}>
            <h2>Kontak Kami &rarr;</h2>
            <p>
              Hubungi Kami, dan dapatkan layanan customer terbaik dari DGMall
              Syariah Help Center
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://dgmall.id/" target="_blank" rel="noopener noreferrer">
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/LogoDgmall.png" alt=" Logo" width={50} height={50} />
          </span>
        </a>
      </footer>
    </div>
  );
}
