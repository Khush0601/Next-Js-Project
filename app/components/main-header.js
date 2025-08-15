import Link from 'next/link'
import React from 'react'
import logoImg from "../assets/logoImg.jpg"
import styles from './main-header.module.css'
import Image from 'next/image'
import NavLink from './navLink/NavLink'


export default function MainHeader() {
  
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <Image src={logoImg} alt="logoImg" />
        NextLevel Food
      </Link>

      <nav>                  
     <ul className={styles.navList}>
     <NavLink href='/meals'>Browse Meals</NavLink>
      <NavLink href='/community'>Food Community</NavLink>
  </ul>
</nav>

    </header>
  )
}
