import { Fragment } from "react";
import ResponsiveDrawer from "../components/Drawer/Drawer";
import Header from "./Header";
import CompanyTable from "../components/Tables/Company";

const Employee = () => {
  return (
    <Fragment>
      <ResponsiveDrawer>
        <Header />
        <CompanyTable />
      </ResponsiveDrawer>
    </Fragment>
  );
};

export default Employee;
