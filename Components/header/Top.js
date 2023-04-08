import styles from "./styles.module.scss";
import { MdSecurity } from "react-icons/md";
import { BsSuitHeart } from "react-icons/bs";
import { RiAccountPinCircleLine, RiArrowDropDownFill } from "react-icons/ri";
import Link from "next/link";
import { useState } from "react";
import UserMenu from "./UserMenu";

export default function Top() {
  const [logged, setLogged] = useState(true);
  const [visible, setvisible] = useState(false);

  return (
    <div className={styles.Top}>
      <div className={styles.top_container}>
        <div></div>
        <ul className={styles.top_list}>
          <li className={styles.li}>
            <img
              src="https://www.seekpng.com/png/full/323-3232715_morocco-flag-png-angel-tube-station.png"
              alt=""
             
            />
            <span>Morocco / usd</span>
          </li >
          <li className={styles.li}>
            <MdSecurity />
            <span>Buyer Protection</span>
          </li>
          <li className={styles.li}>
            <span>Customer Service</span>
          </li>
          <li className={styles.li}>
            <span>Help</span>
          </li>
          <li className={styles.li}>
            <BsSuitHeart />
            <Link href="/profile/whishlist">
              <span>Whishlist</span>
            </Link>
          </li>
          <li className={styles.li} onMouseOver={()=>setvisible(true)} onMouseLeave={()=>setvisible(false)}>
          {logged ? (
            <li className={styles.li}>
              <div className={styles.flex}>
                <img src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png" alt="" />
                <span>Imane</span>
                <RiArrowDropDownFill />
              </div>
            </li>
          ) : (
            <li className={styles.li} >
              <div className={styles.flex}>
                <RiAccountPinCircleLine />
                <span>Account</span>
                <RiArrowDropDownFill />
              </div>
            </li>
          )}
          {
            visible && <UserMenu logged = {logged}/>
          }
      
          </li>
          
        </ul>
      </div>
    </div>
  );
}
