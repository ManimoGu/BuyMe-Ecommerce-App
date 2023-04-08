import styles from "./styles.module.scss";
import Link from "next/link";
import {RiSearch2Line} from "react-icons/ri"
import {FaOpencart} from "react-icons/fa"
import { useSelector } from "react-redux";


export default function Main() {

const cart = useSelector((state) => state.Carts.cart)



  return (
    <div className={styles.main}>
      <div className={styles.main_container}>
        <Link href="/">
          <img src="../../../logo.png" alt="" className={styles.logo} />
        </Link>
        <div className={styles.search}>
            <input type="text" placeholder="...Search" />
            <div className={styles.search_icon}>
                <RiSearch2Line/>
            </div>
        </div>
        <Link href="/cart">
            <span className={styles.cart}>
                <FaOpencart/>
                <span>{cart.length}</span>
            </span>
        
        </Link>
      </div>
    </div>
  );
}
