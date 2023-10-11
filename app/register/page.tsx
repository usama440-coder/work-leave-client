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
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
  Grid,
} from "@mui/material";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Link from "next/link";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <AuthLayout
      page="Sign Up"
      description="Create a new account with email"
      image="/img/register.png"
    >
      <Fragment>
        <Grid container spacing={1}>
          <Grid item md={6} xs={12}>
            <TextField
              sx={{ width: "100%" }}
              required
              id="first-name"
              label="First Name"
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              sx={{ width: "100%" }}
              required
              id="last-name"
              label="Last Name"
            />
          </Grid>
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
            <FormControl required variant="outlined" fullWidth>
              <InputLabel htmlFor="outlined-adornment-password-confirm">
                Confirm Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password-confirm"
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
            <FormGroup>
              <FormControlLabel
                control={<Checkbox size="small" />}
                label={
                  <div>
                    <span>I have read and agree to the </span>
                    <Link href="https://www.google.com">terms of use.</Link>
                  </div>
                }
              />
            </FormGroup>
          </Grid>
          <Grid item xs={12}>
            <PrimaryBtn text="Sign Up" variant="contained" />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              Already have an account?
              <Link href="/login"> Sign in instead.</Link>
            </Typography>
          </Grid>
        </Grid>
      </Fragment>
    </AuthLayout>
  );
};

export default Register;
