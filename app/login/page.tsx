"use client";

import { Fragment, useState } from "react";
import PrimaryBtn from "../components/PrimaryBtn";
import AuthLayout from "../components/AuthLayout/AuthLayout";
import {
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Typography,
  Grid,
} from "@mui/material";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Link from "next/link";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <AuthLayout
      page="Sign In"
      description="Continue with your email and password"
      image="/img/login.png"
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
            <FormControl required variant="outlined" fullWidth>
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {!showPassword ? (
                        <VisibilityOff sx={{ fontSize: "20px" }} />
                      ) : (
                        <Visibility sx={{ fontSize: "20px" }} />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Link href="/forget-password">Forget Password</Link>
          </Grid>
          <Grid item xs={12}>
            <PrimaryBtn text="Sign in" variant="contained" />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              Does not have an account?
              <Link href="/register"> Sign up instead.</Link>
            </Typography>
          </Grid>
        </Grid>
      </Fragment>
    </AuthLayout>
  );
};

export default Login;
