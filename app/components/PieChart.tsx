"use client";

import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const PieChart = () => {
  const chartOption = {
    dataLabels: {
      enabled: false,
    },
    legend: {
      position: "bottom",
    },
    labels: ["Vacation", "Sick", "Unpaid"],
  };

  const series = [20, 12, 16];

  return (
    <>
      <ApexChart
        type="donut"
        options={chartOption}
        series={series}
        width="100%"
        height="100%"
      />
    </>
  );
};

export default PieChart;
