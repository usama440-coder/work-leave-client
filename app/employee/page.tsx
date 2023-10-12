import { Fragment } from "react";
import ResponsiveDrawer from "../components/Drawer/Drawer";
import { Typography } from "@mui/material";
import EmployeeTable from "../components/Tables/Employee";
import PrimaryBtn from "../components/PrimaryBtn";
import styles from "./page.module.css";

const Employee = () => {
  return (
    <Fragment>
      <ResponsiveDrawer>
        <div className={styles.employeeContainer}>
          <Typography variant="h5">Employees</Typography>
          <PrimaryBtn text="+ Invite Employee" variant="outlined" />
        </div>
        <EmployeeTable />
      </ResponsiveDrawer>
    </Fragment>
  );
};

export default Employee;
