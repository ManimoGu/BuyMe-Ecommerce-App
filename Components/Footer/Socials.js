import { FaFacebookF, FaTiktok } from "react-icons/fa"
import styles from "./styles.module.scss"
import { BsInstagram, BsPinterest, BsSnapchat, BsYoutube } from "react-icons/bs"

const Socials = () => {
  return (
    <div className={styles.footer_socials}>
        <section>
            <h4>STAY CONNECTED</h4>
            <ul>
                <li>
                    <a href="/" target="_blank">
                      <FaFacebookF/>
                    </a>
                </li>
                <li>
                    <a href="/" target="_blank">
                      <BsInstagram/>
                    </a>
                </li>
                <li>
                    <a href="/" target="_blank">
                      <BsYoutube/>
                    </a>
                </li>
                <li>
                    <a href="/" target="_blank">
                      <BsPinterest/>
                    </a>
                </li>
                <li>
                    <a href="/" target="_blank">
                      <BsSnapchat/>
                    </a>
                </li>
                <li>
                    <a href="/" target="_blank">
                      <FaTiktok/>
                    </a>
                </li>
            </ul>

        </section>
    </div>
  )
}

export default Socials