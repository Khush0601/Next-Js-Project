'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import styles from "./navLink.module.css"
export default function NavLink({href,children}) {
    const path=usePathname()
  return (
    <div>
        <Link href={href} className={path.startsWith(href)? styles.active:undefined}>{children}</Link>
        
    </div>
  )
}
