import Image from "next/image";
import Link from "next/link";
import logoArea from "./assets/logoImg.jpg"
import styles from "./page.module.css"
import ImageSlideshow from "./components/image-slideshow/image-slideshow";

export default function Home() {
  return (
  <>
     <header className={styles.header}>
        <div className={styles.logoArea}>
        <ImageSlideshow/>
        </div>
        <h1 className={styles.title}>Welcome to Next Level Foods</h1>
        <p className={styles.subtitle}>
          Discover mouth-watering meals and connect with food lovers worldwide.
        </p>
        <div className={styles.headerButtons}>
          <Link href="/community" className={styles.btnPrimary}>
            Join The Community
          </Link>
          <Link href="/meals" className={styles.btnSecondary}>
            Explore the Meals
          </Link>
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.section}>
          <h2>Next Level Foods</h2>
          <p>
            At Next Level Foods, we believe great meals start with fresh
            ingredients, creative recipes, and a community that shares the same
            passion for cooking.
          </p>
        </section>
        <section className={styles.section}>
          <h2>Why Join Us?</h2>
          <ul>
            <li>🍽 Access exclusive recipes</li>
            <li>👩‍🍳 Learn from top chefs</li>
            <li>🌎 Connect with food lovers around the globe</li>
          </ul>
        </section>
      </main>
   
  </>
  );
}
