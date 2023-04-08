import Top from "./Top"
import Ad from "./ad"
import styles from "./styles.module.scss"


const Header = () => {
  return (
    <header className={styles.header}>
      <Ad/>
      <Top/>
    </header>
  )
}

export default Header