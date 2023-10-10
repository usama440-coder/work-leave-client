import React, { Fragment, useState } from "react";
import { Box, CssBaseline, Typography } from "@mui/material";
import styles from "./AuthLayout.module.css";

interface AuthLayoutProps {
  children: React.ReactNode;
  page: String;
  description: String;
}

const AuthLayout = ({ children, page, description }: AuthLayoutProps) => {
  return (
    <Fragment>
      <div className={styles.bar}></div>
      <CssBaseline />
      <div className={styles.container}>
        <div className={styles.authBox}>
          <div className={styles.formContainer}>
            <img
              style={{ marginBottom: "70px" }}
              width={120}
              src="/img/logo.png"
              alt="logo"
            />
            <Typography
              variant="h6"
              sx={{
                position: "absolute",
                left: 0,
                top: "120px",
                bgcolor: "#0FAC81",
                color: "white",
                padding: "5px 15px",
              }}
            >
              {page}
            </Typography>
            <Typography sx={{ textAlign: "center" }} variant="h5">
              Welcome Back, Work Leave
            </Typography>
            <Typography
              sx={{
                marginBottom: "20px",
                textAlign: "center",
              }}
              variant="body1"
            >
              {description}
            </Typography>

            {children}
          </div>
          <Box sx={{ flex: "1" }}>
            <img
              style={{ height: "100%", objectFit: "cover" }}
              width="100%"
              src="/img/login.png"
              alt="login-vector"
            />
          </Box>
        </div>
      </div>
    </Fragment>
  );
};

export default AuthLayout;
