
import styles from "./styles.module.scss"
import Link from "next/link"

const Links = () => {
  return (
    <div className={styles.footer_links}>
        {
            links.map((link,i) =>(
                <ul>
                    {
                        i===0 ? (<img src="../../../logo.png" alt="" /> )
                        :
                        (
                            <b>{link.heading}</b>
                        )

                    }
                    
                    {
                        link.links.map(link =>(
                           <li>
                            <Link href={link.link}><span>{link.name}</span></Link>
                           </li>
                        ))
                    }
                </ul>
            ))
        }
    </div>
  )
}

const links =[
    {
        heading : "SHOPPAY",
        links : [
            {
                name : "About us",
                link : ""
            },
            {
                name : "Contact us",
                link : ""
            },
            {
                name : "Social Responsibility",
                link : ""
            },
            {
                name : "",
                link : ""
            }
        ]
    },
    {
        heading : "Help & Support",
        links :
         [
            {
                name : "Shipping Info",
                link : ""
            },
            {
                name : "Returns",
                link : ""
            },
            {
                name : "How to order",
                link : ""
            },
            {
                name : "How to track",
                link : ""
            },
            {
                name : "Size guide",
                link : ""
            }

        ]
    },
    {
        heading : "Customer service",
        links :
         [
            {
                name : "Customer setvice",
                link : ""
            },
            {
                name : "Terms and Conditions",
                link : ""
            },
            {
                name : "Customers Transactions",
                link : ""
            },
            {
                name : "Take our feedback survey",
                link : ""
            }
        ]
    }
]



export default Links