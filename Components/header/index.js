import Main from "./Main"
import Top from "./Top"
import Ad from "./ad"
import styles from "./styles.module.scss"


const Header = ({country}) => {
  return (
    <header className={styles.header}>
      <Ad/>
      <Top country={country}/>
      <Main/>
    </header>
  )
}

Header.defaultProps = {
  country : {
    name : "Morocco",
    flag : {
      emojitwo : ""
    }
  }
}

export default Header