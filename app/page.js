import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
  <>
  <main>
  <h1 style={{textAlign:'center'}}>
    Time to get started
  </h1>
  <p><Link href="/meals">Meals</Link></p>
  <p><Link href="/meals/share">Share meal</Link></p>
  <p><Link href="/community">Community</Link></p>
   </main>
   
  </>
  );
}
