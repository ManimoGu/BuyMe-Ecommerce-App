import styles from "./styles.module.scss";
import Link from "next/link";
import { signOut, signIn } from "next-auth/react";

const UserMenu = ({session}) => {
  return (
    <div className={styles.menu}>
        <h4>Welcome to buy me </h4>
        {session ? (
            <div className={styles.flex}>
                <img src={session.user.image} alt=""  className={styles.menu_img} />
                <div className={styles.col}>
                    <span>Welcom back,</span>
                    <h3>{session.user.name}</h3>
                    <span onClick={()=> signOut()}>Sign out</span>
                </div>
           
            </div>
        ): (
            <div className={styles.flex}>
                <button className={styles.btn_primary}>Register</button>
                <button className={styles.btn_outlined} onClick={()=> signIn()} >Login</button>
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