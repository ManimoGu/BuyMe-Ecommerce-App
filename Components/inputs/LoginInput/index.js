import React from "react";
import styles from "./styles.module.scss";
import { BiUser } from "react-icons/bi";
import { IoKeyOutline } from "react-icons/io5";
import { SiMinutemailer } from "react-icons/si";
import { ErrorMessage, useField } from "formik";

const LoginInput = ({ icon, placeholder, ...props }) => {
  const [field, meta] = useField(props);
  console.log(meta)

  return (
    <div className={`${styles.input} ${meta.touched && meta.error ? styles.error : "" }`}>
      {icon === "user" ? (
        <BiUser />
      ) : icon === "email" ? (
        <SiMinutemailer />
      ) : icon === "password" ? (
        <IoKeyOutline />
      ) : (
        ""
      )}
      <input
        type={field.type}
        placeholder={placeholder}
        name={field.name}
        {...field}
        {...meta}
        onChange={props.onChange}
      />
      {
        meta.touched && meta.error && <div className={styles.error_popup}>
          <span></span>
          <ErrorMessage name={field.name}/>
        </div>
      }
    </div>
  );
};

export default LoginInput;
