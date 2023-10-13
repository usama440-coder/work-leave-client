"use client";

import { useState } from "react";
import PrimaryBtn from "../components/PrimaryBtn";
import styles from "./page.module.css";
import { Typography } from "@mui/material";
import AddCompanyModal from "../components/modals/AddCompany";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleAddCompany = () => {
    setOpen(true);
  };

  return (
    <>
      <div className={styles.employeeContainer}>
        <Typography variant="h5">Company</Typography>
        <PrimaryBtn
          text="+ Add Company"
          variant="outlined"
          handleBtn={handleAddCompany}
        />
      </div>
      <AddCompanyModal open={open} setOpen={setOpen} />
    </>
  );
};

export default Header;
