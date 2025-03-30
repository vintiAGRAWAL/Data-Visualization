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
      label: "This Week",
      data: [2000, 3000, 4000, 5000, 6000],
      borderColor: "rgb(75, 192, 192)",
    },
    {
      label: "Previous Week",
      data: [2000, 5000, 7000, 5000, 6000],
      borderColor: "rgb(192, 75, 77)",
    },
  ],
};

export const BarChartData = {
  labels: ["Member1", "Member2", "Member3", "Member4"],
  datasets: [
    {
      label: "Number of Tickets Closed",
      data: [1, 2, 1, 1],
      backgroundColor: [
        "rgba(255, 99, 132, 0.6)",
        "rgba(3, 67, 126, 0.6)",
        "rgba(122, 99, 255, 0.6)",
        "rgba(230, 35, 181, 0.6)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgb(82, 58, 239)",
        "rgba(122, 99, 255, 1)",
        "rgba(230, 35, 181, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export const PieChartData = {
  labels: ["Completed", "In-Progress", "To-Start", "Blocked"],
  datasets: [
    {
      label: "Tasks Status",
      data: [2, 3, 2, 1],
      backgroundColor: [
        "rgb(5, 115, 25)",
        "rgb(199, 167, 5)",
        "rgb(205, 55, 254)",
        "rgb(204, 8, 8)",
      ],
      hoverOffset: 4,
    },
  ],
};
