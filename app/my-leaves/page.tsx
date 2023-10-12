import { Fragment } from "react";
import ResponsiveDrawer from "../components/Drawer/Drawer";
import { Typography } from "@mui/material";
import styles from "./page.module.css";
import MyLeavesTable from "../components/Tables/MyLeaves";

const MyLeaves = () => {
  return (
    <Fragment>
      <ResponsiveDrawer>
        <div className={styles.leavesContainer}>
          <Typography variant="h5">My Leaves</Typography>
        </div>
        <MyLeavesTable />
      </ResponsiveDrawer>
    </Fragment>
  );
};

export default MyLeaves;
