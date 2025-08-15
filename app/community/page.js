import React from "react";
import Link from "next/link";
import styles from "./community.module.css";

export default function CommunityPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Welcome to Our Food Community 🍽️</h1>
        <p>
          Join thousands of food lovers sharing recipes, cooking tips, and meal
          inspirations every day.
        </p>
        <Link href="/signup" className={styles.btnPrimary}>
          Join the Community
        </Link>
      </header>

      <main className={styles.main}>
        <section className={styles.section}>
          <h2>What You’ll Get</h2>
          <ul>
            <li>📖 Access to exclusive recipes</li>
            <li>👩‍🍳 Cooking tips from experienced chefs</li>
            <li>💬 Interactive discussion forums</li>
            <li>🎉 Fun cooking challenges & events</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Recent Member Highlights</h2>
          <div className={styles.cards}>
            <div className={styles.card}>
              <h3>Ravi’s Fusion Pasta</h3>
              <p>A mix of Indian spices and Italian pasta – delicious!</p>
            </div>
            <div className={styles.card}>
              <h3>Priya’s Chocolate Lava Cake</h3>
              <p>Perfectly gooey and rich – a true dessert lover’s dream.</p>
            </div>
            <div className={styles.card}>
              <h3>Meera’s Vegan Burgers</h3>
              <p>Plant-based, healthy, and incredibly tasty!</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
