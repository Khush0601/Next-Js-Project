import Link from 'next/link'
import React from 'react'
import logoImg from "../assets/logoImg.jpg"
import styles from './main-header.module.css'
import Image from 'next/image'

export default function MainHeader() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <Image src={logoImg} alt="logoImg" />
        NextLevel Food
      </Link>

      <nav>                  
     <ul className={styles.navList}>
     <li>
      <Link href="/meals" className={styles.navLink}>Browse Meals</Link>
    </li>
    <li>
      <Link href="/community" className={styles.navLink}>Foodie Community</Link>
    </li>
  </ul>
</nav>

    </header>
  )
}
