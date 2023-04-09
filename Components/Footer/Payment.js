import styles from "./styles.module.scss"

const Payment = () => {
  return (
    <div className={styles.footer_payment}>
        <h4>WE ACCEPT</h4>
        <div className={styles.footer_flexwrap}>
            <img src="../../../images/visa.webp" alt="" />
            <img src="../../../images/mastercard.webp" alt="" />
            <img src="../../../images/paypal.webp" alt="" />
        </div>
    </div>
  )
}

export default Payment