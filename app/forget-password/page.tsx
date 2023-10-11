"use client";

import { Fragment } from "react";
import PrimaryBtn from "../components/PrimaryBtn";
import AuthLayout from "../components/AuthLayout/AuthLayout";
import { TextField, Typography, Grid } from "@mui/material";
import Link from "next/link";

const Forget = () => {
  return (
    <AuthLayout
      page="Forget"
      description="Forget password? No worries. Reset password."
      image="/img/reset.png"
    >
      <Fragment>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <TextField
              required
              id="email"
              label="Email"
              type="email"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <PrimaryBtn text="Reset Password" variant="contained" />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              <Link href="/login">Back to login</Link>
            </Typography>
          </Grid>
        </Grid>
      </Fragment>
    </AuthLayout>
  );
};

export default Forget;
