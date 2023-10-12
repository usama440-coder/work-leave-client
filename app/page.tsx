import { Fragment } from "react";
import ResponsiveDrawer from "./components/Drawer/Drawer";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import styles from "./page.module.css";
import { Typography } from "@mui/material";
import EmployeeRequestLatest from "./components/Tables/EmployeeRequestLatest";
import NewJoiner from "./components/Tables/NewJoiner";

const Home = () => {
  return (
    <Fragment>
      <ResponsiveDrawer>
        <div className={styles.chartsContainer}>
          <Typography variant="h5">Leave Chart Flow</Typography>
          <div className={styles.charts}>
            <div className={`${styles.lineChart} ${styles.chart}`}>
              <LineChart />
            </div>
            <div className={`${styles.pieChart} ${styles.chart}`}>
              <PieChart />
            </div>
          </div>
        </div>

        <div className={`${styles.dashboardTable}`}>
          <Typography variant="h5">Employee Request</Typography>
          <EmployeeRequestLatest />
        </div>
        <div className={`${styles.dashboardTable}`}>
          <Typography variant="h5">New Joiners</Typography>
          <NewJoiner />
        </div>
      </ResponsiveDrawer>
    </Fragment>
  );
};

export default Home;
