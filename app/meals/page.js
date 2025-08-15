import React from "react";
import Link from "next/link";
import styles from "./page.module.css";

export default function MealsPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>🍽 Explore Our Meals</h1>
        <p>
          Browse through our delicious collection of recipes, handpicked from
          food lovers around the globe.
        </p>
        <Link href="/meals/share" className={styles.btnPrimary}>
          share
        </Link>
      </header>

      <main className={styles.main}>
        <section className={styles.mealGrid}>
          <div className={styles.mealCard}>
            <h3>Classic Margherita Pizza</h3>
            <p>Fresh tomatoes, mozzarella, basil & olive oil.</p>
          </div>
          <div className={styles.mealCard}>
            <h3>Cheesy Veggie Burger</h3>
            <p>Loaded with grilled veggies & melted cheese.</p>
          </div>
          <div className={styles.mealCard}>
            <h3>Chocolate Lava Cake</h3>
            <p>Rich, gooey, and perfect for dessert lovers.</p>
          </div>
        </section>
      </main>
    </div>
  );
}
