import Link from "next/link"
import styles from "./styles.module.scss"

const Newsletter = () => {
  return (
    <div className={styles.footer_newsletter}>
        <h4>SINGN UP FOR OUT NEWSLETTER</h4>
        <div className={styles.footer_flex}>
            <input type="text" placeholder="Your email adresse..."/>
            <button className={styles.btn_primary}>
                SUBSCRIBE
            </button>
        </div>
        <p>
            By clicking the SUBSCRIBE button, you are agreeing to 
            <Link href="/terms"> Our Privacy & Cookie Policy</Link>
        </p>

    </div>
  )
}

export default Newsletter