import styles from "./styles.module.scss";
import Link from "next/link";

const UserMenu = ({logged}) => {
  return (
    <div className={styles.menu}>
        <h4>Welcome to buy me </h4>
        {logged ? (
            <div className={styles.flex}>
                <img src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png" alt=""  className={styles.menu_img} />
                <div className={styles.col}>
                    <span>Welcom back,</span>
                    <h3>Imane</h3>
                    <span>Sign out</span>
                </div>
           
            </div>
        ): (
            <div className={styles.flex}>
                <button className={styles.btn_primary}>Register</button>
                <button className={styles.btn_outlined}>Login</button>
            </div>
        )}

        <ul>
            <li>
                <Link href="/profile">Account</Link>
            </li>
            <li>
                <Link href="/profile/orders">My orders</Link>
            </li>
            <li>
                <Link href="/profile/message">Message center</Link>
            </li>
            <li>
                <Link href="/profile/adress">Adress</Link>
            </li>
            <li>
                <Link href="/profile/whishlist">Whishlist</Link>
            </li>
        </ul>

    </div>
  )
}

export default UserMenu