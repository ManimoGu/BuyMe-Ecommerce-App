import axios from 'axios'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import Header from '@/Components/header'
import Footer from '@/Components/Footer'
import { useSession, signIn, signOut } from "next-auth/react"

const inter = Inter({ subsets: ['latin'] })

export default function Home(props) {
  console.log(props.country)
  const { data: session } = useSession()
  return (
    <>
     
      <main className={styles.main}>

       <Header country = {props.country}/>
    
       <Footer country = {props.country} />
       
      </main>
    </>
  )
}

export async function getServerSideProps(){

  //let data = await axios.get("https://api.ipregistry.co/?key=0na8c7ubwrpcowwg")
   //let country = data.data.location.country
   let country = {
    name : "Morocco",
    flag: {
      emojitwo : "https://www.seekpng.com/png/full/323-3232715_morocco-flag-png-angel-tube-station.png"
    }
   }
                  
            return {props : {country}}

}
