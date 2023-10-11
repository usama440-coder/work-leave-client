"use client";

import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const PieChart = () => {
  const option = {
    dataLabels: {
      enabled: false,
    },
    labels: ["Vacation", "Sick", "Unpaid"],
  };

  const series = [20, 12, 16];

  return (
    <>
      <ApexChart
        type="donut"
        options={option}
        series={series}
        width="500"
        height={500}
      />
    </>
  );
};

export default PieChart;
