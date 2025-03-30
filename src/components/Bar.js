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
    <div className="flex flex-col items-center w-full max-w-screen-lg">
      <Bar
        options={{
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: "Contribution from each team member",
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
        }}
        data={BarChartData}
      />
    </div>
  );
};
