import Head from 'next/head'
import Image from 'next/image'
import Button from '../src/components/Button'
import Header from '../src/components/Header'
import styles from '../styles/Home.module.css'

export default function Home() {

  const handleClick = () => {
    alert("hello");
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Whatsap App</title>
      </Head>
      <Header> Testing Themes </Header>
      <Button onClick={handleClick}>toggle</Button>
    </div>
  )
}
