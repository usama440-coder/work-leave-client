import { Fragment } from "react";
import ResponsiveDrawer from "../components/Drawer/Drawer";
import SettingsTable from "../components/Tables/Setting";
import Header from "./Header";

const MyLeaves = () => {
  return (
    <Fragment>
      <ResponsiveDrawer>
        <Header />
        <SettingsTable />
      </ResponsiveDrawer>
    </Fragment>
  );
};

export default MyLeaves;
