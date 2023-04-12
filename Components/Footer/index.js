import Copywrite from "./Copywrite"
import Links from "./Links"
import Newsletter from "./Newsletter"
import Payment from "./Payment"
import Socials from "./Socials"
import styles from "./styles.module.scss"

export default function Footer({country}) {
  return (
    <footer className={styles.footer}>
        <div className={styles.footer_container}>
            <Links/>
            <Socials/>
            <Newsletter/>
            <Payment/>
            <Copywrite country = {country}/>
        </div>
    </footer>
  )
}
