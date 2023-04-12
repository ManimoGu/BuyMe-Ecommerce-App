import styles from "./styles.module.scss"
import Link from "next/link"
import {IoLocationSharp} from "react-icons/io5"

const Copywrite = ({country}) => {
  return (
    <div className={styles.footer_copywrite}>
        <section>@2023 BUYME All Rights Resereved</section>
        <section>
            <ul>
                {
                    data.map((link,i)=>(
                        <li key={i}>
                            <Link href={link.link}>{link.name}</Link>
                        </li>
                    ))
                }
                <li>
                    <a href="">
                       <IoLocationSharp/> {country.name}
                    </a>
                </li>
            </ul>
        </section>
    </div>
  )
}

const data = [

    {
        name : "Privacy Center",
        link : ""
    },
    {
        name : "Privacy and Cookie Policy",
        link: ""
    },
    {
        name : "Manage Cookies",
        link: ""
    },
    {
        name : "Term & Conditions",
        link : ""
    },
    {
        name : "Copywrite Notice",
        link : ""
    }

    
]

export default Copywrite