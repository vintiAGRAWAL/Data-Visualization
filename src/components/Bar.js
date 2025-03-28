import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  BarElement,
  Title,
  Legend,
} from "chart.js";

import { BarChartData } from "../FAKE_DATA";

//for rendering inside website

ChartJS.register(
  CategoryScale,
  LinearScale,
  Tooltip,
  BarElement,
  Title,
  Legend
);
export const BarChart = () => {
  return (
    <Bar
      options={{
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: "A Bar Chart Here",
          },
        },
      }}
      data={BarChartData}
    />
  );
};
