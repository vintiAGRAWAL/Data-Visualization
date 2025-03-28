export const lineChartData = {
  labels: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
  datasets: [
    {
      label: "Steps",
      data: [2000, 3000, 4000, 5000, 6000],
      borderColor: "rgb(75, 192, 192)",
    },
    {
      label: "Steps by Me",
      data: [2000, 5000, 7000, 5000, 6000],
      borderColor: "rgb(192, 75, 77)",
    },
  ],
};

export const BarChartData = {
  labels: ["Rent", "Groceries", "Utilities", "Transport"],
  datasets: [
    {
      label: "Expenses",
      data: [100, 40, 50, 80],
      backgroundColor: [
        "rgba(255, 99, 132, 0.6)",
        "rgba(3, 67, 126, 0.6)",
        "rgba(122, 99, 255, 0.6)",
        "rgba(230, 35, 181, 0.6)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(147, 216, 19, 1)",
        "rgba(122, 99, 255, 1)",
        "rgba(230, 35, 181, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export const PieChartData = {
  labels: ["Vins", "Trins", "Dins", "Kins"],
  datasets: [
    {
      label: "Time Spent",
      data: [100, 40, 60, 70],
      backgroundColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(147, 216, 19, 1)",
        "rgba(122, 99, 255, 1)",
        "rgba(230, 35, 181, 1)",
      ],
      hoverOffset: 4,
    },
  ],
};
