import React, { Fragment } from "react";
import { CssBaseline } from "@mui/material";
import styles from "./AuthLayout.module.css";

interface AuthLayoutProps {
  children: React.ReactNode;
  page: String;
  description: String;
  image: string;
}

const AuthLayout = ({
  children,
  page,
  description,
  image,
}: AuthLayoutProps) => {
  return (
    <Fragment>
      <div className={styles.bar}></div>
      <CssBaseline />
      <div className={styles.container}>
        <div className={styles.authBox}>
          <div className={styles.formContainer}>
            <img
              className={styles.logo}
              width={120}
              src="/img/logo.png"
              alt="logo"
            />
            <h3 className={styles.page}>{page}</h3>
            <h2 className={styles.greeting}>Welcome Back, Work Leave</h2>
            <p className={styles.description}>{description}</p>
            {children}
          </div>
          <div className={styles.imgContainer}>
            <img
              className={styles.vectorImage}
              src={image}
              alt="login-vector"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AuthLayout;
