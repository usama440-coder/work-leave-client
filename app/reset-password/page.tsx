"use client";

import { Fragment } from "react";
import PrimaryBtn from "../components/PrimaryBtn";
import AuthLayout from "../components/AuthLayout/AuthLayout";
import { TextField, Typography, Grid } from "@mui/material";
import Link from "next/link";
import { MuiOtpInput } from "mui-one-time-password-input";
import { useState } from "react";

const Reset = () => {
  const [otp, setOtp] = useState("");

  return (
    <AuthLayout
      page="Reset"
      description="We have sent a code to your email"
      image="/img/reset.png"
    >
      <Fragment>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <MuiOtpInput
              length={4}
              TextFieldsProps={{ placeholder: "-" }}
              value={otp}
              onChange={(val) => setOtp(val)}
            />
          </Grid>
          <Grid item xs={12}>
            <PrimaryBtn text="Continue" variant="contained" />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              Did not recieve code?
              <PrimaryBtn text=" Resend" variant="text" />
            </Typography>
          </Grid>
        </Grid>
      </Fragment>
    </AuthLayout>
  );
};

export default Reset;
