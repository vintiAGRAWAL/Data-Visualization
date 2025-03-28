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
        text: "A Pie Chart Here",
      },
    },
  };
  return <Pie options={options} data={PieChartData} />;
};
