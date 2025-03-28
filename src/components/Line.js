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
        text: "A Line Chart Here",
      },
    },
  };
  // const data = {  };
  return <Line options={options} data={lineChartData} />;
};
