// charts.tsx/jsx

"use client"; // if you use app dir, don't forget this line

import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const LineChart = () => {
  const option = {
    chart: {
      id: "line-chart",
    },
    stroke: {
      show: true,
      curve: "smooth",
      width: 2,
    },
    xaxis: {
      categories: ["Jun", "May", "Apr", "Mar", "Feb", "Jan"],
    },
  };

  const series = [
    {
      name: "sick leave",
      data: [30, 40, 35, 50, 49, 60],
    },
    {
      name: "vacation leave",
      data: [10, 34, 25, 99, 16, 25],
    },
    {
      name: "unpaid leave",
      data: [60, 34, 28, 76, 45, 79],
    },
  ];

  return (
    <>
      <ApexChart
        type="line"
        options={option}
        series={series}
        height="100%"
        width={"100%"}
      />
    </>
  );
};

export default LineChart;
