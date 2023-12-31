import { Fragment } from "react";
import ResponsiveDrawer from "../components/Drawer/Drawer";
import EmployeeTable from "../components/Tables/Employee";
import Header from "./Header";

const Employee = () => {
  return (
    <Fragment>
      <ResponsiveDrawer>
        <Header />
        <EmployeeTable />
      </ResponsiveDrawer>
    </Fragment>
  );
};

export default Employee;
