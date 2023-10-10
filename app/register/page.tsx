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
} from "@mui/material";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Link from "next/link";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <AuthLayout
      page="Sign Up"
      description="Create a new account with email

    "
    >
      <Fragment>
        <form>
          <TextField
            sx={{ m: 1, width: "100%", maxWidth: "27ch" }}
            required
            id="first-name"
            label="First Name"
          />
          <TextField
            sx={{ m: 1, width: "100%", maxWidth: "27ch" }}
            required
            id="last-name"
            label="Last Name"
          />
          <TextField
            sx={{ m: 1, maxWidth: "55.5ch" }}
            required
            id="email"
            label="Email"
            type="email"
            fullWidth
          />
          <FormControl
            required
            sx={{ m: 1, maxWidth: "55.5ch" }}
            variant="outlined"
            fullWidth
          >
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
          <FormControl
            required
            sx={{ m: 1, maxWidth: "55.5ch" }}
            variant="outlined"
            fullWidth
          >
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
          <FormGroup sx={{ m: 1 }}>
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
          <PrimaryBtn text="Sign up" />
          <Typography sx={{ m: 1, alignSelf: "flex-start" }} variant="body1">
            Already have an account?
            <Link href="/"> Sign in instead.</Link>
          </Typography>
        </form>
      </Fragment>
    </AuthLayout>
  );
};

export default Register;
