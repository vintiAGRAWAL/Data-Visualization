import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  LineElement,
  Title,
  Legend,
} from "chart.js";

import { lineChartData } from "../FAKE_DATA";

//for rendering inside website

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  LineElement,
  Title,
  Legend
);

export const LineGraph = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Progress over the week by the team",
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
    <div className="flex flex-col items-center w-full max-w-screen-lg">
      <Line options={options} data={lineChartData} />
    </div>
  );
};
