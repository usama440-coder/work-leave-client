import { Fragment } from "react";
import ResponsiveDrawer from "../components/Drawer/Drawer";
import { Typography } from "@mui/material";
import styles from "./page.module.css";
import SettingsTable from "../components/Tables/Setting";
import PrimaryBtn from "../components/PrimaryBtn";

const MyLeaves = () => {
  return (
    <Fragment>
      <ResponsiveDrawer>
        <div className={styles.settingsContainer}>
          <Typography variant="h5">Settings</Typography>
          <PrimaryBtn text="+ Add Leave Type" variant="outlined" />
        </div>
        <SettingsTable />
      </ResponsiveDrawer>
    </Fragment>
  );
};

export default MyLeaves;
