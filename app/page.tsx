import { Fragment } from "react";
import ResponsiveDrawer from "./components/Drawer/Drawer";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";

const Home = () => {
  return (
    <Fragment>
      <ResponsiveDrawer>
        <h2>Dashboard</h2>
        <div
          style={{
            border: "2px solid red",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <LineChart />
          <PieChart />
        </div>
      </ResponsiveDrawer>
    </Fragment>
  );
};

export default Home;
