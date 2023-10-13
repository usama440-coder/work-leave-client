"use client";

import { useState } from "react";
import PrimaryBtn from "../components/PrimaryBtn";
import styles from "./page.module.css";
import { Typography } from "@mui/material";
import InviteEmployeeModal from "../components/modals/InviteEmployee";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleInviteEmployee = () => {
    setOpen(true);
  };

  return (
    <>
      <div className={styles.employeeContainer}>
        <Typography variant="h5">Employees</Typography>
        <PrimaryBtn
          text="+ Invite Employee"
          variant="outlined"
          handleBtn={handleInviteEmployee}
        />
      </div>
      <InviteEmployeeModal open={open} setOpen={setOpen} />
    </>
  );
};

export default Header;
