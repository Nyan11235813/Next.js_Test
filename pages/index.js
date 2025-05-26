import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Member List | Home</title>
        <meta name="keywords" content="members"/>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <h3 className={styles.title1}>Mission</h3>
        <p className={styles.text}>To become a trusted global leader in IT services by delivering secure, intelligent, 
          and future-ready digital solutions that empower businesses and protect the digital world.</p>
        
          <h3 className={styles.title1}>Vision</h3>
          <ul className={styles.text}>
            <li>To provide high-quality and reliable IT services in Cybersecurity, Web Development, Data Analytics, 
            System Maintenance, and Blockchain.</li>
            <li>To help our clients innovate, grow, and stay secure in a constantly evolving digital environment.</li>
            <li>To build long-term partnerships through expert engineering, transparency, and customer-focused solutions.</li>
            <li>To stay at the forefront of technology and continuously enhance our skills, tools, and practices.</li>
          </ul>
        
        <Link legacyBehavior href="/members/">
          <a className={styles.btn}>See Member Listing</a>
        </Link>
      </div>
    </>
  )
}
