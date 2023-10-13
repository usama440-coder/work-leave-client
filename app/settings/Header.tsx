"use client";

import { useState } from "react";
import PrimaryBtn from "../components/PrimaryBtn";
import styles from "./page.module.css";
import { Typography } from "@mui/material";
import SettingsModal from "../components/modals/Settings";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleSettings = () => {
    setOpen(true);
  };

  return (
    <>
      <div className={styles.settingsContainer}>
        <Typography variant="h5">Settings</Typography>
        <PrimaryBtn
          text="+ Add Leave Type"
          variant="outlined"
          handleBtn={handleSettings}
        />
      </div>
      <SettingsModal open={open} setOpen={setOpen} />
    </>
  );
};

export default Header;
