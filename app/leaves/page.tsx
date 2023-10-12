import { Fragment } from "react";
import ResponsiveDrawer from "../components/Drawer/Drawer";
import { Typography } from "@mui/material";
import styles from "./page.module.css";
import LeaveTable from "../components/Tables/Leave";

const Leaves = () => {
  return (
    <Fragment>
      <ResponsiveDrawer>
        <div className={styles.leavesContainer}>
          <Typography variant="h5">Leaves</Typography>
        </div>
        <LeaveTable />
      </ResponsiveDrawer>
    </Fragment>
  );
};

export default Leaves;
