import Footer from "@/Components/Footer";
import Header from "@/Components/header";
import styles from "../styles/signin.module.scss";
import React, { use } from "react";
import { BiLeftArrowAlt } from "react-icons/bi";
import Link from "next/link";
import * as Yup from "yup"
import { Formik, Form } from "formik";
import LoginInput from "@/Components/inputs/LoginInput";
import { useState } from "react";
import CircledBtn from "@/Components/buttons/circledBtn";

export default function Signin() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });



 const loginValidation = Yup.object({
 email : Yup.string().required("Email adress is required").email("please enter a valide email"),
 password : Yup.string().required("Passwors is required")
 })
  const handelChange = (event) =>{
  
    setUser({...user, [event.target.name] : event.target.value})

  }

  return (
    <div>
      <Header />
      <div className={styles.login}>
        <div className={styles.login_container}>
          <div className={styles.login_header}>
            <div className={styles.back_svg}>
              <BiLeftArrowAlt />
            </div>
            <span>
              we'd be happy to join us ! <Link href="/">Go store</Link>
            </span>
          </div>
          <div className={styles.login_form}>
            <h1>Sign in</h1>
            <p>Get access of one of the best Eshopping in the world</p>
            <Formik
            enableReinitialize
            initialValues={{
              email : user.email,
              password : user.password
            }}
            validationSchema={loginValidation}
            >
              {(form) => (
                <Form>
                  <LoginInput
                    type="text"
                    icon="email"
                    name="email"
                    placeholder="email adress"
                    onChange = {handelChange}
                  />
                   <LoginInput
                    type="text"
                    icon="password"
                    name="password"
                    placeholder="password"
                    onChange = {handelChange}
                  />
                  <CircledBtn type={"text"}  text={"Sign in"}/>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
