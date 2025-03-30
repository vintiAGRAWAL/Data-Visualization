import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, ArcElement, Legend, Title } from "chart.js";

import { PieChartData } from "../FAKE_DATA";

//for rendering inside website

ChartJS.register(Tooltip, ArcElement, Legend, Title);
export const PieChart = () => {
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Task Division Ratio",
        font: {
          size: 20,
          weight: "bold",
          family: "Arial",
        },
        color: "rgba(0, 0, 0, 1)",
        padding: {
          top: 10,
          bottom: 20,
        },
      },
    },
  };
  return (
    <div
      className="flex flex-col items-center w-full max-w-screen-lg"
      style={{
        width: "600px",
        height: "600px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Pie options={options} data={PieChartData} />
    </div>
  );
};
