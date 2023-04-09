import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import Header from '@/Components/header'
import Footer from '@/Components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     
      <main className={styles.main}>

       <Header/>
       <Footer/>
       
      </main>
    </>
  )
}
