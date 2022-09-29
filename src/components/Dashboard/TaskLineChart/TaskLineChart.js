import "./TaskLineChart.css";

// Apex Charts
import React from "react";
import Chart from "react-apexcharts";

function TaskLineChart() {
  // Line Chart Data and Config
  const lineChartData = {
    options: {
      chart: {
        id: "basic-bar",
        width: "100%",
        height: 400,
        toolbar: {
          show: false,
        },
      },
      grid: {
        padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        },
      },
      legend: {
        show: false,
      },
      stroke: {
        width: 2,
        curve: "smooth",
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
      {
        name: "series-2",
        data: [91, 70, 60, 49, 50, 45, 40, 30],
      },
    ],
  };

  return (
    <div className="Line-chart-card">
      {/* Line Chart Header */}
      <div className="Line-chart-header d-flex justify-between align-center m-b-6">
        <h2 className="text-green">Task Done</h2>
        <div className="Line-chart-filter d-flex">
          <button>Daily</button>
          <button>Weekly</button>
          <button className="Active">Monthly</button>
        </div>
      </div>

      {/* Line Chart */}
      <div className="Line-chart">
        <Chart
          options={lineChartData.options}
          series={lineChartData.series}
          type="line"
          height="300"
        />
      </div>
    </div>
  );
}

export default TaskLineChart;
